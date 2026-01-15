'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function MagicPortal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => router.push('/love'), 1200);
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.1}
      dragConstraints={{
        top: -400,
        bottom: 400,
        left: -600,
        right: 600,
      }}
      initial={{ x: 0, y: 0 }}
      className="fixed right-4 md:right-8 top-1/3 z-40 cursor-move touch-none"
    >
      <div className="flex flex-col items-center space-y-2 md:space-y-3">
        {/* The Secret Portal Container */}
        <div
          onClick={handleOpen}
          className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 cursor-pointer overflow-hidden rounded-xl border border-zinc-800/50 shadow-lg hover:shadow-xl transition-shadow"
        >
          {/* THE SECRET: The Magic GIF behind */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/knight-magic.gif"
              alt="Magic"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* DOOR PANEL: LEFT */}
          <motion.div
            animate={{ x: isOpen ? '-100%' : '0%' }}
            transition={{ duration: 1.2, ease: [0.45, 0.05, 0.55, 0.95] }}
            className="absolute inset-y-0 left-0 w-1/2 z-10 overflow-hidden shadow-[4px_0_12px_rgba(0,0,0,0.5)]"
          >
            <div className="relative w-20 md:w-24 lg:w-28 h-full">
              <Image
                src="/assets/knight-static.jpg"
                alt="Portal"
                fill
                className="object-cover object-left sepia-[20%]"
              />
            </div>
          </motion.div>

          {/* DOOR PANEL: RIGHT */}
          <motion.div
            animate={{ x: isOpen ? '100%' : '0%' }}
            transition={{ duration: 1.2, ease: [0.45, 0.05, 0.55, 0.95] }}
            className="absolute inset-y-0 right-0 w-1/2 z-10 overflow-hidden shadow-[-4px_0_12px_rgba(0,0,0,0.5)]"
          >
            <div className="relative w-20 md:w-24 lg:w-28 h-full -ml-10 md:-ml-12 lg:-ml-14">
              <Image
                src="/assets/knight-static.jpg"
                alt="Portal"
                fill
                className="object-cover object-right sepia-[20%]"
              />
            </div>
          </motion.div>

          {/* Hover effect */}
          {!isOpen && (
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none z-20 bg-gradient-to-br from-amber-500/20 to-transparent" />
          )}
        </div>

        {/* Text */}
        <motion.p
          animate={{ opacity: isOpen ? 0 : [0.5, 1, 0.5] }}
          transition={{
            opacity: isOpen ? { duration: 0.3 } : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="font-mono text-[9px] md:text-[10px] lg:text-xs text-muted-foreground uppercase tracking-wider select-none text-center pointer-events-none"
        >
          Drag me!
        </motion.p>
      </div>
    </motion.div>
  );
}
