import { systemPrompt } from '@/config/ChatPrompt';
import { NextRequest, NextResponse } from 'next/server';
import * as z from 'zod';

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const chatSchema = z.object({
  message: z.string().min(1).max(2000),
  history: z
    .array(
      z.object({
        role: z.enum(['user', 'model']),
        parts: z.array(z.object({ text: z.string() })),
      }),
    )
    .optional()
    .default([]),
});

function sanitizeInput(input: string): string {
  const injectionPatterns = [
    /ignore previous instructions/gi,
    /system prompt/gi,
    /you are now/gi,
    /act as/gi,
    /pretend to be/gi,
    /ignore all previous/gi,
    /forget everything/gi,
    /new instructions/gi,
    /override/gi,
    /bypass/gi,
    /hack/gi,
    /exploit/gi,
    /inject/gi,
    /prompt injection/gi,
    /system message/gi,
    /role play/gi,
    /character/gi,
    /persona/gi,
    /behave as/gi,
    /respond as/gi,
  ];

  let sanitized = input;

  injectionPatterns.forEach((pattern) => {
    sanitized = sanitized.replace(pattern, '[REDACTED]');
  });

  sanitized = sanitized.trim().replace(/\s+/g, ' ');

  if (sanitized.length > 2000) {
    sanitized = sanitized.substring(0, 2000);
  }

  return sanitized;
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  return 'unknown';
}

function checkRateLimit(clientIP: string): {
  allowed: boolean;
  remaining: number;
} {
  const now = Date.now();
  const clientData = rateLimitStore.get(clientIP);

  if (!clientData || now > clientData.resetTime) {
    rateLimitStore.set(clientIP, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
  }

  if (clientData.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  clientData.count++;
  rateLimitStore.set(clientIP, clientData);

  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - clientData.count,
  };
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfter: RATE_LIMIT_WINDOW / 1000,
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': (Date.now() + RATE_LIMIT_WINDOW).toString(),
          },
        },
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    console.log('Environment check:', {
      hasApiKey: !!apiKey,
      apiKeyPrefix: apiKey ? apiKey.substring(0, 15) + '...' : 'undefined',
      nodeEnv: process.env.NODE_ENV,
    });

    if (!apiKey) {
      console.error('OPENAI_API_KEY not configured');
      console.error('Available env vars:', Object.keys(process.env).filter(k => k.includes('OPEN')));
      return NextResponse.json(
        { error: 'AI service not configured. Please check server logs.' },
        { status: 500 },
      );
    }

    const body = await request.json();
    const validatedData = chatSchema.parse(body);

    // Prepare messages for OpenAI API
    const messages = [
      {
        role: 'system',
        content: systemPrompt,
      },
      // Add conversation history
      ...validatedData.history.map((msg) => ({
        role: msg.role === 'model' ? 'assistant' : msg.role,
        content: msg.parts.map(p => p.text).join('\n'),
      })),
      // Add current message
      {
        role: 'user',
        content: sanitizeInput(validatedData.message),
      },
    ];

    const openAIUrl = 'https://api.openai.com/v1/chat/completions';

    const response = await fetch(openAIUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: messages,
        stream: true,
        max_tokens: 512,
        temperature: 0.7,
      }),
    });

    console.log('OpenAI request sent:', {
      model: 'gpt-3.5-turbo',
      messageCount: messages.length,
      stream: true,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
      });

      let errorMessage = 'AI service error';
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.error?.message || errorJson.message || errorMessage;
      } catch (e) {
        // Error text is not JSON
      }

      return NextResponse.json(
        { error: `${errorMessage} (Status: ${response.status})` },
        { status: response.status },
      );
    }

    console.log('OpenAI response OK, starting stream...');

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          if (!response.body) {
            throw new Error('No response body');
          }

          const reader = response.body.getReader();
          const decoder = new TextDecoder();

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value);
            const lines = chunk.split('\n').filter(line => line.trim() !== '');

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6);

                if (data === '[DONE]') {
                  controller.enqueue(encoder.encode('data: {"done": true}\n\n'));
                  continue;
                }

                try {
                  const parsed = JSON.parse(data);
                  const text = parsed.choices?.[0]?.delta?.content;

                  if (text) {
                    const sseData = `data: ${JSON.stringify({ text })}\n\n`;
                    controller.enqueue(encoder.encode(sseData));
                  }
                } catch (parseError) {
                  console.error('Parse error:', parseError);
                }
              }
            }
          }

          controller.enqueue(encoder.encode('data: {"done": true}\n\n'));
          controller.close();
        } catch (error) {
          console.error('Streaming error:', error);
          const errorData = `data: ${JSON.stringify({ error: 'Stream error occurred' })}\n\n`;
          controller.enqueue(encoder.encode(errorData));
          controller.close();
        }
      },
    });

    return new NextResponse(stream, {
      status: 200,
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        'Access-Control-Allow-Origin': '*',
        'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
        'X-RateLimit-Remaining': rateLimit.remaining.toString(),
      },
    });
  } catch (error) {
    console.error('Chat API Error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Invalid request data',
          details: error.errors,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
