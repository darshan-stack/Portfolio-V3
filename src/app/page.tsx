import Container from '@/components/common/Container';
import { SectionSticker } from '@/components/common/FloatingStickers';
import MagicPortal from '@/components/common/MagicPortal';
import About from '@/components/landing/About';
import Blog from '@/components/landing/Blog';
import PaperTail from '@/components/landing/PaperTail';
import CategorizedSkills from '@/components/landing/CategorizedSkills';
import CTA from '@/components/landing/CTA';
import Experience from '@/components/landing/Experience';
import Github from '@/components/landing/Github';
import Hero from '@/components/landing/Hero';
import Journey from '@/components/landing/Journey';
import OpenSource from '@/components/landing/OpenSource';
import Publications from '@/components/landing/Publications';
import ResearchProjects from '@/components/landing/ResearchProjects';
import SpotifyWidget from '@/components/landing/SpotifyWidget';
import Work from '@/components/landing/Projects';
import Setup from '@/components/landing/Setup';
import React from 'react';

export default function page() {
  return (
    <>
      <Container className="min-h-screen py-16">
        <Hero />
        
        <div className="relative">
          <SpotifyWidget />
          <SectionSticker src="/stickers/sticker-2.gif" alt="Spotify Sticker" direction="right" />
        </div>
        
        <div className="relative">
          <Publications />
          <SectionSticker src="/stickers/sticker-3.gif" alt="Publications Sticker" direction="left" />
        </div>
        
        <div className="relative">
          <ResearchProjects />
          <SectionSticker src="/stickers/sticker-4.gif" alt="Research Sticker" direction="right" />
        </div>
        
        <div className="relative">
          <OpenSource />
          <SectionSticker src="/stickers/sticker-5.gif" alt="Open Source Sticker" direction="left" />
        </div>
        
        <div className="relative">
          <CategorizedSkills />
          <SectionSticker src="/stickers/sticker-6.gif" alt="Skills Sticker" direction="right" />
        </div>
        
        <div className="relative">
          <Experience />
          <SectionSticker src="/stickers/sticker-1.gif" alt="Experience Sticker" direction="left" />
        </div>
        
        <Work />
        
        <div className="relative">
          <About />
          <SectionSticker src="/stickers/sticker-3.gif" alt="About Sticker" direction="left" />
        </div>
        
        <div className="relative">
          <Github />
          <SectionSticker src="/stickers/sticker-4.gif" alt="Github Sticker" direction="right" />
        </div>
        
        <div className="relative">
          <Blog />
          <SectionSticker src="/stickers/sticker-5.gif" alt="Blog Sticker" direction="left" />
        </div>
      </Container>
      
      <PaperTail />
      
      <Container className="min-h-screen py-16">
        <div className="relative">
          <CTA />
          <SectionSticker src="/stickers/sticker-6.gif" alt="CTA Sticker" direction="right" />
        </div>
        
        <div className="relative">
          <Setup />
          <SectionSticker src="/stickers/sticker-1.gif" alt="Setup Sticker" direction="left" />
        </div>
        
        <div className="relative">
          <Journey />
          <SectionSticker src="/stickers/sticker-2.gif" alt="Journey Sticker" direction="right" />
        </div>
      </Container>
    </>
  );
}
