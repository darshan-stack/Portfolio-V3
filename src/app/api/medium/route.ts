import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch('https://medium.com/feed/@darshanmistaridz', {
            headers: {
                'User-Agent': 'Mozilla/5.0',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch Medium feed');
        }

        const xmlText = await response.text();

        // Parse XML to extract blog posts
        const items = xmlText.match(/<item>[\s\S]*?<\/item>/g) || [];

        const blogs = items.slice(0, 6).map((item) => {
            const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] || '';
            const link = item.match(/<link>(.*?)<\/link>/)?.[1] || '';
            const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || '';
            const description = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1] || '';

            // Extract first image if available
            const imageMatch = description.match(/<img[^>]+src="([^">]+)"/);
            const image = imageMatch ? imageMatch[1] : null;

            // Clean description (remove HTML tags)
            const cleanDescription = description
                .replace(/<[^>]*>/g, '')
                .replace(/&nbsp;/g, ' ')
                .replace(/&amp;/g, '&')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&quot;/g, '"')
                .substring(0, 200) + '...';

            return {
                title,
                link,
                pubDate: new Date(pubDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                }),
                description: cleanDescription,
                image,
            };
        });

        return NextResponse.json({ blogs });
    } catch (error) {
        console.error('Error fetching Medium blogs:', error);
        return NextResponse.json(
            { error: 'Failed to fetch blogs' },
            { status: 500 }
        );
    }
}
