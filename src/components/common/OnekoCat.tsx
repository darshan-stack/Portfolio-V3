'use client';

import { catConfig } from '@/config/Cat';
import { motion, useMotionValue, useSpring } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';

type CatState = 'idle' | 'walking' | 'sitting' | 'jumping';

export default function OnekoCat() {
  if (!catConfig.enabled) {
    return null;
  }

  const [catState, setCatState] = useState<CatState>('idle');
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const [isPerching, setIsPerching] = useState(false);

  // Motion values for smooth physics-based movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for cat position (slower movement: higher damping, lower stiffness)
  const catX = useSpring(mouseX, { stiffness: 80, damping: 30 });
  const catY = useSpring(mouseY, { stiffness: 80, damping: 30 });

  const lastMoveTime = useRef(Date.now());
  const currentCatX = useRef(0);
  const currentCatY = useRef(0);

  useEffect(() => {
    // Track actual cat position for distance calculations
    const unsubscribeX = catX.on('change', (latest) => {
      currentCatX.current = latest;
    });
    const unsubscribeY = catY.on('change', (latest) => {
      currentCatY.current = latest;
    });

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [catX, catY]);

  useEffect(() => {
    let animationFrame: number;
    let idleTimer: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      lastMoveTime.current = Date.now();

      // Check for perch targets (elements with data-perch attribute)
      const target = e.target as HTMLElement;
      const perchTarget = target.closest('[data-perch]') as HTMLElement | null;

      if (perchTarget) {
        const rect = perchTarget.getBoundingClientRect();
        // Sit on top center of the element
        mouseX.set(rect.left + rect.width / 2 - 48); // -48 to center the cat (half of 96px)
        mouseY.set(rect.top - 96); // -96 to sit on top
        setIsPerching(true);
      } else {
        mouseX.set(e.clientX - 48);
        mouseY.set(e.clientY - 48);
        setIsPerching(false);
      }

      // Clear idle timer
      clearTimeout(idleTimer);

      // Set state based on distance and movement
      const checkState = () => {
        const dx = e.clientX - currentCatX.current;
        const dy = e.clientY - currentCatY.current;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Update direction based on horizontal movement
        if (Math.abs(dx) > 5) {
          setDirection(dx > 0 ? 1 : -1);
        }

        if (distance > 50) {
          setCatState('walking');
        } else if (distance > 10) {
          setCatState('idle');
        }
      };

      animationFrame = requestAnimationFrame(checkState);

      // Set sitting state if mouse stops for 2 seconds
      idleTimer = setTimeout(() => {
        if (Date.now() - lastMoveTime.current >= 2000) {
          setCatState('sitting');
        }
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Initial sitting state check
    const sittingCheck = setInterval(() => {
      if (Date.now() - lastMoveTime.current >= 2000) {
        setCatState('sitting');
      }
    }, 500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
      clearTimeout(idleTimer);
      clearInterval(sittingCheck);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] w-24 h-24"
      style={{
        left: catX,
        top: catY,
        scaleX: direction,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Cat sprite with state-based animations */}
      <motion.img
        src="/oneko/oneko.gif"
        alt="Page Pet"
        className="w-full h-full object-contain"
        animate={
          catState === 'idle'
            ? {
                scale: [1, 1.02, 1],
                y: [0, -1, 0],
              }
            : catState === 'sitting'
              ? {
                  scale: [1, 0.95, 1],
                  y: [0, 2, 0],
                }
              : catState === 'jumping'
                ? {
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }
                : {}
        }
        transition={
          catState === 'idle'
            ? {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : catState === 'sitting'
              ? {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
              : catState === 'jumping'
                ? {
                    duration: 0.6,
                    ease: [0.6, 0.01, 0.05, 0.95],
                  }
                : undefined
        }
      />
    </motion.div>
  );
}
