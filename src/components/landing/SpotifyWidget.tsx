'use client';

import { Volume2, ExternalLink } from 'lucide-react';
import React, { useState } from 'react';
import { SiSpotify, SiApplemusic, SiYoutubemusic } from '@icons-pack/react-simple-icons';

const PLAYLIST_ID = '0WdXYBGShW9x0CTrB5lB21';
const COLLABORATIVE_LINK = 'https://open.spotify.com/playlist/0WdXYBGShW9x0CTrB5lB21?si=235b154cf106477d&pt=e1fb0b210dd830c7a8cc149d1037557c';

export default function SpotifyWidget() {
  const [showPlayer, setShowPlayer] = useState(true); // Show player by default

  return (
    <section className="py-8 relative">
      <div id="spotify-widget" className="relative space-y-4">
        {/* Header Card */}
        <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-green-500/5 to-transparent p-6 transition-all duration-300 hover:from-green-500/10 hover:border-green-500/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <SiSpotify size={24} className="text-black" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">My Music Playlist</h3>
                <p className="text-sm text-muted-foreground">Favorite tracks collection</p>
              </div>
            </div>
            <button
              onClick={() => setShowPlayer(!showPlayer)}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              <Volume2 size={16} />
              <span>{showPlayer ? 'Hide' : 'Show'} Player</span>
            </button>
          </div>

          {/* Music Service Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            <a
              href="https://open.spotify.com/user/YOUR_SPOTIFY_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-green-500 transition-colors"
            >
              <SiSpotify size={14} />
              <span>Spotify</span>
            </a>
            <a
              href="https://music.apple.com/profile/YOUR_APPLE_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-pink-500 transition-colors"
            >
              <SiApplemusic size={14} />
              <span>Apple Music</span>
            </a>
            <a
              href="https://music.youtube.com/channel/YOUR_YT_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-red-500 transition-colors"
            >
              <SiYoutubemusic size={14} />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        {/* Embedded Spotify Playlist Player */}
        {showPlayer && (
          <div className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent p-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center gap-2 mb-3">
              <Volume2 size={16} className="text-green-500" />
              <span className="text-sm font-medium text-green-500">My Playlist</span>
              <span className="text-xs text-muted-foreground ml-auto">
                All tracks from my Spotify playlist
              </span>
            </div>

            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: '12px' }}
              src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator`}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

            {/* Add Song Button */}
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={COLLABORATIVE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-medium rounded-lg transition-colors"
              >
                <SiSpotify size={16} />
                <span>Add Your Favorite Song</span>
                <ExternalLink size={14} />
              </a>
              <p className="text-xs text-muted-foreground text-center">
                Collaborative playlist - Share your music with me!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
