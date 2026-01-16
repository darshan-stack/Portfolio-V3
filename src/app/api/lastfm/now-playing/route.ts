import { NextResponse } from 'next/server';

const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
const LASTFM_USERNAME = process.env.LASTFM_USERNAME;

export async function GET() {
    try {
        if (!LASTFM_API_KEY || !LASTFM_USERNAME) {
            return NextResponse.json({ isPlaying: false }, { status: 200 });
        }

        const url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`;

        const response = await fetch(url);
        const data = await response.json();

        if (!data.recenttracks?.track?.[0]) {
            return NextResponse.json({ isPlaying: false }, { status: 200 });
        }

        const track = data.recenttracks.track[0];
        const isPlaying = track['@attr']?.nowplaying === 'true';

        return NextResponse.json({
            isPlaying,
            title: track.name,
            artist: track.artist['#text'] || track.artist,
            album: track.album['#text'] || 'Unknown Album',
            albumImageUrl: track.image[3]['#text'] || track.image[2]['#text'] || '',
            songUrl: track.url,
        });
    } catch (error) {
        console.error('Error fetching Last.fm data:', error);
        return NextResponse.json({ isPlaying: false }, { status: 200 });
    }
}
