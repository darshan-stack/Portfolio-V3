'use client';

import { useEffect, useState } from 'react';

interface SpotifyData {
  track_id: string;
  timestamps: {
    start: number;
    end: number;
  };
  song: string;
  artist: string;
  album: string;
  album_art_url: string;
}

interface LanyardData {
  spotify: SpotifyData | null;
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
  activities: any[];
}

interface LanyardResponse {
  success: boolean;
  data: LanyardData;
}

export function useSpotify(discordId: string) {
  const [spotify, setSpotify] = useState<SpotifyData | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!discordId) {
      setLoading(false);
      return;
    }

    const fetchSpotifyData = async () => {
      try {
        console.log('Fetching Spotify data for Discord ID:', discordId);
        const response = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`);
        const data: LanyardResponse = await response.json();
        
        console.log('Lanyard API Response:', data);

        if (data.success && data.data.spotify) {
          console.log('Spotify data found:', data.data.spotify);
          setSpotify(data.data.spotify);
          setIsPlaying(true);
        } else {
          console.log('No Spotify data in response');
          setIsPlaying(false);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Spotify data:', error);
        setLoading(false);
      }
    };

    // Initial fetch
    fetchSpotifyData();

    // Poll every 30 seconds
    const interval = setInterval(fetchSpotifyData, 30000);

    return () => clearInterval(interval);
  }, [discordId]);

  return { spotify, isPlaying, loading };
}
