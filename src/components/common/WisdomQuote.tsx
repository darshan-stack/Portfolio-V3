'use client';

import { useEffect, useState } from 'react';

const wisdomQuotes = [
  {
    text: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन',
    translation: 'You have the right to perform your duty, but not to the fruits of your actions',
    source: 'Bhagavad Gita 2.47',
  },
  {
    text: 'योगः कर्मसु कौशलम्',
    translation: 'Yoga is skill in action',
    source: 'Bhagavad Gita 2.50',
  },
  {
    text: 'सत्यमेव जयते',
    translation: 'Truth alone triumphs',
    source: 'Mundaka Upanishad',
  },
  {
    text: 'तत् त्वम् असि',
    translation: 'That thou art — You are that divine essence',
    source: 'Chandogya Upanishad',
  },
  {
    text: 'अहिंसा परमो धर्मः',
    translation: 'Non-violence is the supreme virtue',
    source: 'Mahabharata',
  },
];

export default function WisdomQuote() {
  const [currentQuote, setCurrentQuote] = useState(wisdomQuotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(wisdomQuotes[Math.floor(Math.random() * wisdomQuotes.length)]);
    }, 10000); // Rotate every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-20 right-6 z-50 max-w-xs">
      <div className="flex flex-col gap-1 px-4 py-3 rounded-lg bg-[#111111] border border-zinc-800 shadow-lg backdrop-blur-sm">
        <p className="text-xs font-mono text-zinc-400 italic leading-relaxed">
          &ldquo;{currentQuote.translation}&rdquo;
        </p>
        <p className="text-[10px] font-mono text-zinc-600 text-right">
          — {currentQuote.source}
        </p>
      </div>
    </div>
  );
}
