import { footerConfig } from '@/config/Footer';
import React from 'react';

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[450px] mt-24 overflow-hidden border-t border-zinc-900">
      {/* The Pixel Art GIF Asset */}
      <img
        src="/pixel-jeff-mario.gif"
        className="absolute inset-0 z-0 w-full h-full object-cover object-bottom opacity-90"
        alt="Atmospheric Footer Background"
      />

      {/* Seamless Transition Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-black/20 to-transparent" />

      {/* Footer Links & Info */}
      <div className="relative z-20 flex flex-col items-center justify-end h-full pb-12 text-center">
        <div className="flex space-x-6 mb-4">
          {footerConfig.links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
          {footerConfig.copyright}
        </p>
        <p className="font-mono text-xs text-zinc-600 mt-1">
          {footerConfig.text}
        </p>
      </div>
    </footer>
  );
}
