import { heroConfig, skillComponents, socialLinks } from '@/config/Hero';
import { parseTemplate } from '@/lib/hero';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import Skill from '../common/Skill';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

export default function Hero() {
  const { name, title, avatar, skills, description, buttons } = heroConfig;
  const avatarGlow = '/assets/avatar-glow.gif';
  const avatarBackGif = '/assets/logo-flip.gif'; // Back side GIF

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === 'skill' && 'skill' in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === 'bold' && 'text' in part) {
        return (
          <b key={part.key} className="text-primary whitespace-pre-wrap">
            {part.text}
          </b>
        );
      } else if (part.type === 'text' && 'text' in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background GIF Layer - High-Resolution */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src={avatarGlow}
          alt="hero background"
          fill
          className="object-cover object-center brightness-[0.4] scale-110"
          unoptimized
          priority
          quality={100}
          sizes="100vw"
        />
      </div>

      {/* Dark Overlay for Professional Look & Text Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-background/90" />

      {/* Content Layer */}
      <Container className="relative z-20 mx-auto max-w-5xl py-16 md:py-20">
        {/* Logo/Avatar with 3D Flip Effect */}
        <div className="group perspective-1000 size-32">
          <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
            {/* Front Side - Original Logo */}
            <div className="absolute inset-0 backface-hidden">
              <Image
                src={avatar}
                alt="hero"
                width={128}
                height={128}
                className="size-32 bg-blue-300 dark:bg-yellow-300 ring-4 ring-white/20 shadow-2xl"
              />
            </div>
            
            {/* Back Side - GIF */}
            <div className="absolute inset-0 backface-hidden rotate-y-180">
              <Image
                src={avatarBackGif}
                alt="hero animated"
                width={128}
                height={128}
                className="size-32 bg-gradient-to-br from-purple-500 to-pink-500 ring-4 ring-white/20 shadow-2xl object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Text Area */}
        <div className="mt-8 flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white drop-shadow-lg">
            Hii, I am {name} — <span className="text-gray-200">{title}</span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-sm md:text-base whitespace-pre-wrap text-gray-100 drop-shadow-md">
            {renderDescription()}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          {buttons.map((button, index) => {
            const IconComponent =
              buttonIcons[button.icon as keyof typeof buttonIcons];
            return (
              <Button
                key={index}
                variant={button.variant as 'outline' | 'default'}
                className={cn(
                  button.variant === 'outline' && 'inset-shadow-indigo-500 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20',
                  button.variant === 'default' && 'inset-shadow-indigo-500 bg-white text-black hover:bg-gray-100',
                )}
              >
                {IconComponent && <IconComponent />}
                <Link href={button.href}>{button.text}</Link>
              </Button>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="mt-8 flex gap-2">
          {socialLinks.map((link) => (
            <Tooltip key={link.name} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  key={link.name}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <span className="size-6">{link.icon}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </Container>
    </section>
  );
}
