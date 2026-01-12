'use client';

import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import React from 'react';

interface PolaroidProps {
  src: string;
  caption: string;
  rotation: number;
  index: number;
}

const Polaroid = ({ src, caption, rotation, index }: PolaroidProps) => {
  return (
    <motion.div
      className="relative group perspective-1000"
      style={{ rotate: rotation }}
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 20, transition: { duration: 0.3 } }}
    >
      {/* Tape Effect */}
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#fdfaf5] opacity-90 shadow-sm z-20 
                   rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300"
        style={{
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
          clipPath: 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)', // Slight rip effect
        }}
      />

      {/* Card */}
      <div className="bg-white p-4 pb-12 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] rounded-sm border border-stone-100 relative">
        {/* Photo */}
        <div className="relative w-64 h-64 bg-stone-100 overflow-hidden filter sepia-[0.15] contrast-[1.05]">
          <Image
            src={src}
            alt={caption}
            fill
            className="object-cover"
          />
          {/* Inner Shadow/Vignette */}
          <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.1)] pointer-events-none" />
        </div>

        {/* Caption */}
        <p className="mt-6 font-['Caveat'] text-[#4a3b32] text-center text-2xl rotate-[-1deg]">
          {caption}
        </p>
      </div>
    </motion.div>
  );
};

export default function LovePage() {
  const polaroids = [
    { src: '/assets/family-photo-1.jpg', caption: 'Together we rise ✨', rotation: -2 },
    { src: '/assets/family-photo-2.jpg', caption: 'My strength, my home 💛', rotation: 1 },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-foreground flex justify-center py-12 px-4 md:px-8">

      {/* Cream Paper Container */}
      <div className="w-full max-w-4xl bg-[#f4f0e6] relative shadow-2xl overflow-hidden min-h-[90vh]">

        {/* Navigation */}
        <div className="absolute top-12 left-12 z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#8c7865] hover:text-[#5d4037] transition-colors font-['Caveat'] text-xl"
          >
            <ArrowLeft size={18} />
            home
          </Link>
        </div>

        {/* Content Centered */}
        <div className="flex flex-col items-center pt-24 pb-20 px-8 text-center bg-[#f4f0e6]">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-3 text-[#e11d48]/80 text-xs font-bold tracking-widest uppercase font-mono">
              <span>♥</span>
              <span>Wall of Love</span>
              <span>♥</span>
            </div>
            <h1 className="font-['Caveat'] text-5xl md:text-7xl text-[#5d4037]">
              The People Who Made Me
            </h1>
          </motion.div>

          {/* Polaroids Grid */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-16 mb-24 max-w-3xl">
            {polaroids.map((photo, index) => (
              <Polaroid
                key={index}
                src={photo.src}
                caption={photo.caption}
                rotation={photo.rotation}
                index={index}
              />
            ))}
          </div>

          {/* Heartfelt Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl mx-auto space-y-8 font-mono text-[#5d4037]/80 text-sm md:text-base leading-relaxed"
          >
            <p>
              Behind every line of code, every model trained, and every bug fixed at 3 AM,
              there's a family that never asked me to choose between my dreams and their expectations.
            </p>

            <div className="space-y-2">
              <p>
                To <span className="font-bold text-[#5d4037]">Mom</span>, who learned what "machine learning" meant just to ask about my day.
              </p>
              <p>
                To <span className="font-bold text-[#5d4037]">Dad</span>, who believed in paths he never walked himself.
              </p>
              <p>
                To <span className="font-bold text-[#5d4037]">everyone</span> who made sacrifices I'll spend my life trying to repay.
              </p>
            </div>

            <p className="font-['Caveat'] text-2xl text-[#5d4037] pt-4 italic">
              This portfolio isn't just mine—it's ours.
            </p>
          </motion.div>

          {/* Footer Signature */}
          <div className="mt-24 relative w-fit mx-auto group">
            <div className="opacity-70">
              {/* Simple Curved Line SVG */}
              <svg width="200" height="40" viewBox="0 0 200 40" fill="none" className="mb-2 mx-auto stroke-[#5d4037] stroke-[1.5]">
                <path d="M20,20 Q100,20 180,20" strokeLinecap="round" />
              </svg>
              <p className="font-['Caveat'] text-[#5d4037] text-xl">
                With Love, Satyam
              </p>
            </div>

            {/* Little Pug Icon Placeholder */}
            <div className="absolute left-[calc(100%+1rem)] -bottom-2 w-40 h-40 mix-blend-normal transform rotate-12 hidden md:block">
              <Image
                src="/assets/pug.png"
                alt="Pug"
                fill
                className="object-contain drop-shadow-md"
              />
              <span className="text-6xl absolute inset-0 flex items-center justify-center opacity-0">🐕</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
