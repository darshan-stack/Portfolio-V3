'use client';

import { useEffect, useState } from 'react';

interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  albumArt: string;
  url: string;
  isPlaying: boolean;
}

export function useSpotify() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('/api/spotify/now-playing');

        if (response.status === 204 || !response.ok) {
          setTrack(null);
          setLoading(false);
          return;
        }

        const data = await response.json();

        if (data.isPlaying) {
          setTrack({
            name: data.title,
            artist: data.artist,
            album: data.album,
            albumArt: data.albumImageUrl,
            url: data.songUrl,
            isPlaying: true,
          });
        } else {
          setTrack(null);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching Spotify data:', error);
        setTrack(null);
        setLoading(false);
      }
    };

    // Initial fetch
    fetchNowPlaying();

    // Poll every 30 seconds
    const interval = setInterval(fetchNowPlaying, 30000);

    return () => clearInterval(interval);
  }, []);

  return {
    track,
    isPlaying: track?.isPlaying || false,
    loading
  };
}
