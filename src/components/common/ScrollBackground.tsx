'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

interface ScrollBackgroundProps {
    src: string;
    alt: string;
    position?: 'left' | 'right' | 'center';
    className?: string;
    children?: React.ReactNode;
}

export function ScrollBackground({
    src,
    alt,
    position = 'center',
    className = '',
    children,
}: ScrollBackgroundProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    // Parallax effect - background moves slower than scroll
    const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

    // Fade in when entering viewport, fade out when leaving
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Scale effect - starts smaller, grows to full size, then shrinks
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

    // Blur effect - blurred when far, sharp in viewport
    const blur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [10, 0, 0, 10]);

    // Position-based horizontal movement
    const getXTransform = () => {
        switch (position) {
            case 'left':
                return useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100]);
            case 'right':
                return useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
            default:
                return useTransform(scrollYProgress, [0, 1], [0, 0]);
        }
    };

    const x = getXTransform();

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            {/* Animated background layer */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    y,
                    opacity,
                    scale,
                    x,
                }}
            >
                <motion.div
                    style={{
                        filter: blur.get() ? `blur(${blur.get()}px)` : 'none',
                    }}
                    className="relative w-full h-full"
                >
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover select-none"
                        style={{
                            objectPosition: position === 'left' ? 'left center' : position === 'right' ? 'right center' : 'center',
                        }}
                        unoptimized
                        priority={false}
                    />
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
                </motion.div>
            </motion.div>

            {/* Content layer */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}

interface ParallaxSectionProps {
    children: React.ReactNode;
    backgroundImage?: string;
    backgroundAlt?: string;
    className?: string;
    position?: 'left' | 'right' | 'center';
}

export function ParallaxSection({
    children,
    backgroundImage,
    backgroundAlt = 'Background',
    className = '',
    position = 'center',
}: ParallaxSectionProps) {
    const ref = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    // Smooth parallax movement
    const y = useTransform(scrollYProgress, [0, 1], ['15%', '-15%']);

    // Fade and scale animation
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

    return (
        <section ref={ref} className={`relative min-h-screen ${className}`}>
            {backgroundImage && (
                <motion.div
                    className="absolute inset-0 z-0 overflow-hidden"
                    style={{ y, opacity, scale }}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={backgroundImage}
                            alt={backgroundAlt}
                            fill
                            className="object-cover select-none"
                            style={{
                                objectPosition: position === 'left' ? 'left center' : position === 'right' ? 'right center' : 'center',
                            }}
                            unoptimized
                            priority={false}
                        />
                        {/* Dark overlay for better content visibility */}
                        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90 dark:from-background/95 dark:via-background/80 dark:to-background/95" />
                    </div>
                </motion.div>
            )}

            <div className="relative z-10">{children}</div>
        </section>
    );
}
