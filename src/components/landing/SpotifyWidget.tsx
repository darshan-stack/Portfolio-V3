'use client';

import { Play } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { SiSpotify } from '@icons-pack/react-simple-icons';
import { useSpotify } from '@/hooks/use-spotify';

export default function SpotifyWidget() {
  const { track, isPlaying, loading } = useSpotify();

  // Fallback when not playing
  const fallbackTrack = {
    title: 'Not Playing',
    artist: 'Connect your Spotify account',
    album: 'Spotify',
    albumArt: '',
    url: '#',
  };

  const displayTrack = track
    ? {
      title: track.name,
      artist: track.artist,
      album: track.album,
      albumArt: track.albumArt,
      url: track.url,
    }
    : fallbackTrack;

  return (
    <section className="py-8 relative">
      <div id="spotify-widget" className="relative">
        <a
          href={displayTrack.url}
          target="_blank"
          rel="noopener noreferrer"
          data-perch
          className="block rounded-2xl border border-white/15 bg-theme-subtle p-6 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-zinc-950/30 border-theme-hover group"
        >
          <div className="flex items-center gap-4">
            {/* Animated Visualizer - only show when playing */}
            {isPlaying && (
              <div className="flex items-end gap-0.5 h-8 w-6">
                <div className="w-1 bg-green-500 rounded-full animate-music-bar-1" style={{ height: '60%' }} />
                <div className="w-1 bg-green-500 rounded-full animate-music-bar-2" style={{ height: '40%' }} />
                <div className="w-1 bg-green-500 rounded-full animate-music-bar-3" style={{ height: '80%' }} />
              </div>
            )}

            {/* Album Art */}
            <div className="relative w-14 h-14 rounded-md overflow-hidden bg-muted flex-shrink-0">
              {displayTrack.albumArt ? (
                <Image
                  src={displayTrack.albumArt}
                  alt={displayTrack.album}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-green-700/20 flex items-center justify-center">
                  <SiSpotify size={24} className="text-green-500/50" />
                </div>
              )}
            </div>

            {/* Track Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <SiSpotify size={12} className="text-green-500" />
                <span className="text-[10px] text-green-500 font-medium">
                  {isPlaying ? 'Now Playing' : 'Last played'}
                </span>
              </div>
              <p className="text-sm font-semibold text-foreground truncate mb-0.5">
                {displayTrack.title}
              </p>
              <p className="text-xs text-muted-foreground truncate">{displayTrack.artist}</p>
            </div>

            {/* Play Button */}
            <button
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors flex-shrink-0"
              aria-label="Play track"
            >
              <Play size={16} className="text-foreground ml-0.5" fill="currentColor" />
            </button>
          </div>
        </a>
      </div>
    </section>
  );
}
