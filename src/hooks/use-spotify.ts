'use client';

import { useEffect, useState } from 'react';

interface LanyardData {
  spotify: {
    track_id: string;
    song: string;
    artist: string;
    album: string;
    album_art_url: string;
    timestamps: {
      start: number;
      end: number;
    };
  } | null;
  listening_to_spotify: boolean;
  discord_user: {
    username: string;
    id: string;
  };
  activities: any[];
}

export function useSpotify() {
  const [track, setTrack] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const DISCORD_ID = '1288864021025525840';

  useEffect(() => {
    let ws: WebSocket | null = null;
    let heartbeatInterval: NodeJS.Timeout;

    // WebSocket connection for real-time updates (faster than polling)
    const connectWebSocket = () => {
      ws = new WebSocket('wss://api.lanyard.rest/socket');

      ws.onopen = () => {
        console.log('Lanyard WebSocket connected');
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.op === 1) {
          // Hello - send heartbeat
          heartbeatInterval = setInterval(() => {
            if (ws?.readyState === WebSocket.OPEN) {
              ws.send(JSON.stringify({ op: 3 }));
            }
          }, data.d.heartbeat_interval);

          // Subscribe to user
          ws?.send(
            JSON.stringify({
              op: 2,
              d: {
                subscribe_to_id: DISCORD_ID,
              },
            })
          );
        } else if (data.op === 0) {
          // Event - update data
          const lanyardData: LanyardData = data.d;
          updateTrack(lanyardData);
        }
      };

      ws.onerror = (error) => {
        console.error('Lanyard WebSocket error:', error);
        // Fallback to REST API
        fetchViaREST();
      };

      ws.onclose = () => {
        console.log('Lanyard WebSocket closed, reconnecting...');
        clearInterval(heartbeatInterval);
        // Reconnect after 5 seconds
        setTimeout(connectWebSocket, 5000);
      };
    };

    // REST API fallback
    const fetchViaREST = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);

        if (!response.ok) {
          setTrack(null);
          setLoading(false);
          return;
        }

        const data = await response.json();
        updateTrack(data.data);
      } catch (error) {
        console.error('Error fetching Lanyard data:', error);
        setTrack(null);
        setLoading(false);
      }
    };

    const updateTrack = (lanyardData: LanyardData) => {
      if (lanyardData.listening_to_spotify && lanyardData.spotify) {
        setTrack({
          name: lanyardData.spotify.song,
          artist: lanyardData.spotify.artist,
          album: lanyardData.spotify.album,
          albumArt: lanyardData.spotify.album_art_url,
          url: `https://open.spotify.com/track/${lanyardData.spotify.track_id}`,
          isPlaying: true,
        });
      } else {
        setTrack(null);
      }
      setLoading(false);
    };

    // Try WebSocket first, fallback to REST
    try {
      connectWebSocket();
    } catch (error) {
      console.error('WebSocket not supported, using REST API');
      fetchViaREST();
      // Poll every 10 seconds as fallback
      const interval = setInterval(fetchViaREST, 10000);
      return () => clearInterval(interval);
    }

    return () => {
      if (ws) {
        ws.close();
      }
      clearInterval(heartbeatInterval);
    };
  }, []);

  return {
    track,
    isPlaying: track?.isPlaying || false,
    loading
  };
}
