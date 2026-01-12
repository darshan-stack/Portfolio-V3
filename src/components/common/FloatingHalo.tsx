'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface FloatingIconProps {
  src: string;
  alt: string;
  delay: number;
  radius: number;
  speed: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ src, alt, delay, radius, speed }) => {
  const [angle, setAngle] = useState(delay);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + speed) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, [speed]);

  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <div
      className="absolute transition-all duration-100 ease-linear"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <div className="w-10 h-10 rounded-full bg-[#111111] border border-zinc-800 p-2 shadow-lg backdrop-blur-sm hover:scale-110 transition-transform">
        <Image src={src} alt={alt} width={24} height={24} className="w-full h-full" />
      </div>
    </div>
  );
};

export default function FloatingHalo() {
  const icons = [
    { src: '/skills/pytorch.svg', alt: 'PyTorch' },
    { src: '/skills/tensorflow.svg', alt: 'TensorFlow' },
    { src: '/skills/huggingface.svg', alt: 'Hugging Face' },
    { src: '/skills/opencv.svg', alt: 'OpenCV' },
    { src: '/skills/python.svg', alt: 'Python' },
    { src: '/skills/docker.svg', alt: 'Docker' },
  ];

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* Central Avatar */}
      <div className="relative z-10">
        <Image
          src="/assets/logo.png"
          alt="Satyam"
          width={96}
          height={96}
          className="rounded-full ring-4 ring-white/20 shadow-2xl"
        />
      </div>

      {/* Floating Icons */}
      {icons.map((icon, index) => (
        <FloatingIcon
          key={icon.alt}
          src={icon.src}
          alt={icon.alt}
          delay={(360 / icons.length) * index}
          radius={80}
          speed={0.5}
        />
      ))}
    </div>
  );
}
