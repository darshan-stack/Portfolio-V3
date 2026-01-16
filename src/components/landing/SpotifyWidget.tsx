'use client';

import { Play, Music2, ExternalLink, Volume2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { SiSpotify, SiApplemusic, SiYoutubemusic } from '@icons-pack/react-simple-icons';

// Your favorite tracks - customize this!
const FAVORITE_TRACKS = [
  {
    title: 'Radha Radha',
    artist: 'Swapnil Bandodkar',
    album: 'Marathi Devotional',
    albumArt: '/music/radha-radha.png',
    url: 'https://open.spotify.com/track/3KkXRkHbMCARz0aVfEt68P',
    spotifyId: '3KkXRkHbMCARz0aVfEt68P',
  },
  {
    title: 'Zingaat',
    artist: 'Ajay-Atul',
    album: 'Sairat (Marathi Love Song)',
    albumArt: '/music/marathi-love.png',
    url: 'https://open.spotify.com/track/4P3yU7kByqp3oPLPVBLqhE',
    spotifyId: '4P3yU7kByqp3oPLPVBLqhE',
  },
  {
    title: 'O Re Chori',
    artist: 'Arijit Singh',
    album: 'Jab Tak Hai Jaan',
    albumArt: '/music/jab-tak-hai-jaan.png',
    url: 'https://open.spotify.com/track/1zNXPjW8pdDMfVp7VqnKKu',
    spotifyId: '1zNXPjW8pdDMfVp7VqnKKu',
  },
  {
    title: 'Do Pal',
    artist: 'Lata Mangeshkar, Sonu Nigam',
    album: 'Veer-Zaara',
    albumArt: '/music/veer-zaara.png',
    url: 'https://open.spotify.com/track/7vLfP8RZVNnAJnLWlLnLnL',
    spotifyId: '7vLfP8RZVNnAJnLWlLnLnL',
  },
  {
    title: 'Gaurai Majhi',
    artist: 'Marathi Folk',
    album: 'Marathi Traditional',
    albumArt: '/music/gaurai-majhi.png',
    url: 'https://open.spotify.com/search/gaurai%20majhi',
    spotifyId: '3KkXRkHbMCARz0aVfEt68P', // Using Radha Radha as fallback
  },
];

export default function SpotifyWidget() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showPlayer, setShowPlayer] = useState(false);

  // Rotate through favorite tracks - play full song (3-4 minutes)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrackIndex((prev) => (prev + 1) % FAVORITE_TRACKS.length);
    }, 180000); // Change track every 3 minutes (180000ms)

    return () => clearInterval(interval);
  }, []);

  const currentTrack = FAVORITE_TRACKS[currentTrackIndex];

  // Safety check - if no tracks, don't render
  if (!currentTrack || FAVORITE_TRACKS.length === 0) {
    return null;
  }

  return (
    <section className="py-8 relative">
      <div id="spotify-widget" className="relative space-y-4">
        {/* Main Track Card */}
        <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-green-500/5 to-transparent p-6 transition-all duration-300 hover:from-green-500/10 hover:border-green-500/30 group">
          <a
            href={currentTrack.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex items-center gap-4">
              {/* Animated Visualizer */}
              {isAnimating && (
                <div className="flex items-end gap-0.5 h-8 w-6">
                  <div className="w-1 bg-green-500 rounded-full animate-music-bar-1" style={{ height: '60%' }} />
                  <div className="w-1 bg-green-500 rounded-full animate-music-bar-2" style={{ height: '40%' }} />
                  <div className="w-1 bg-green-500 rounded-full animate-music-bar-3" style={{ height: '80%' }} />
                </div>
              )}

              {/* Album Art */}
              <div className="relative w-14 h-14 rounded-md overflow-hidden bg-muted flex-shrink-0 group-hover:scale-105 transition-transform">
                {currentTrack.albumArt ? (
                  <img
                    src={currentTrack.albumArt}
                    alt={currentTrack.album}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-green-700/20 flex items-center justify-center">
                    <Music2 size={24} className="text-green-500/50" />
                  </div>
                )}
              </div>

              {/* Track Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <SiSpotify size={12} className="text-green-500" />
                  <span className="text-[10px] text-green-500 font-medium">
                    Favorite Track #{currentTrackIndex + 1}
                  </span>
                </div>
                <p className="text-sm font-semibold text-foreground truncate mb-0.5 group-hover:text-green-500 transition-colors">
                  {currentTrack.title}
                </p>
                <p className="text-xs text-muted-foreground truncate">{currentTrack.artist}</p>
              </div>

              {/* Play Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPlayer(!showPlayer);
                }}
                className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all flex-shrink-0 shadow-lg shadow-green-500/20"
                aria-label="Play track"
              >
                {showPlayer ? (
                  <Volume2 size={16} className="text-black" />
                ) : (
                  <Play size={16} className="text-black ml-0.5" fill="currentColor" />
                )}
              </button>
            </div>
          </a>

          {/* Music Service Links - Outside the main link to avoid nested anchors */}
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
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
            <ExternalLink size={14} className="text-muted-foreground group-hover:text-green-500 transition-colors" />
          </div>
        </div>

        {/* Embedded Spotify Playlist Player */}
        {showPlayer && (
          <div className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent p-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center gap-2 mb-3">
              <Volume2 size={16} className="text-green-500" />
              <span className="text-sm font-medium text-green-500">My Playlist</span>
            </div>
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/0WdXYBGShW9x0CTrB5lB21?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <p className="text-xs text-muted-foreground mt-2 text-center">

              {/* Add Song Button */}
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="https://open.spotify.com/playlist/0WdXYBGShW9x0CTrB5lB21?si=235b154cf106477d&pt=e1fb0b210dd830c7a8cc149d1037557c"
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
              My favorite tracks playlist - Click play to listen
            </p>
          </div>
        )}

        {/* Track Indicators */}
        <div className="flex justify-center gap-1.5">
          {FAVORITE_TRACKS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTrackIndex(index)}
              className={`h-1 rounded-full transition-all ${index === currentTrackIndex
                ? 'w-6 bg-green-500'
                : 'w-1 bg-white/20 hover:bg-white/40'
                }`}
              aria-label={`Show track ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
