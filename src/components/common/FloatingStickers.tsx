'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import React, { useRef } from 'react';

interface SectionStickerProps {
  src: string;
  alt: string;
  direction: 'left' | 'right';
}

export function SectionSticker({ src, alt, direction }: SectionStickerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Scroll-based horizontal movement with safe bounds
  // Left stickers: -200px (off-screen left) → 0px (center) → 200px (off-screen right)
  // Right stickers: 200px (off-screen right) → 0px (center) → -200px (off-screen left)
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    direction === 'left' 
      ? [-200, 0, 200]  // Left to right movement
      : [200, 0, -200]  // Right to left movement
  );

  // Fade in as entering viewport, fade out as leaving
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1, 0.8]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-10, 0, 10]
  );

  return (
    <div 
      ref={ref} 
      className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden"
    >
      {/* Desktop: Full scroll animation */}
      <motion.div
        style={{
          x,
          opacity,
          scale,
          rotate,
          position: 'absolute',
          top: '50%',
          left: direction === 'left' ? '10%' : 'auto',
          right: direction === 'right' ? '10%' : 'auto',
          translateY: '-50%',
        }}
        className="hidden xl:block"
      >
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          className="select-none drop-shadow-2xl"
          style={{ background: 'transparent' }}
          unoptimized
        />
      </motion.div>
    </div>
  );
}

export default function FloatingStickers() {
  return null;
}
