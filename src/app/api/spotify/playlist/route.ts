import { NextResponse } from 'next/server';

const PLAYLIST_ID = '0WdXYBGShW9x0CTrB5lB21';

export async function GET() {
    try {
        // Fetch playlist data from Spotify's public embed endpoint
        const response = await fetch(
            `https://open.spotify.com/embed/playlist/${PLAYLIST_ID}`,
            {
                headers: {
                    'User-Agent': 'Mozilla/5.0',
                },
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch playlist');
        }

        const html = await response.text();

        // Extract playlist data from the embed page
        // This is a simplified approach - in production, you'd use Spotify API
        const tracks = [];

        // For now, return the playlist ID so the widget can use the embed
        return NextResponse.json({
            playlistId: PLAYLIST_ID,
            playlistUrl: `https://open.spotify.com/playlist/${PLAYLIST_ID}`,
            embedUrl: `https://open.spotify.com/embed/playlist/${PLAYLIST_ID}`,
            message: 'Use Spotify embed to display actual playlist tracks',
        });
    } catch (error) {
        console.error('Error fetching playlist:', error);
        return NextResponse.json(
            { error: 'Failed to fetch playlist' },
            { status: 500 }
        );
    }
}
