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
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { TypewriterEffectSmooth } from '../ui/typewriter-effect';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Vortex } from '../ui/vortex';

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
      {/* Vortex Background Layer */}
      <div className="absolute inset-0 z-0">
        <Vortex
          backgroundColor="transparent"
          rangeY={800}
          particleCount={500}
          baseHue={220}
          className="w-full h-full"
          containerClassName="w-full h-full"
        />
      </div>

      {/* Content Layer */}
      <Container className="relative z-10 mx-auto max-w-5xl py-16 md:py-20">
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
          <TypewriterEffectSmooth
            words={[
              { text: "Hii," },
              { text: "I" },
              { text: "am" },
              { text: "Darshan", className: "text-blue-400 dark:text-blue-400" },
              { text: "Mistari", className: "text-blue-400 dark:text-blue-400" },
              { text: "—" },
              { text: "ML", className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400" },
              { text: "&", className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400" },
              { text: "Robotics", className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400" },
              { text: "Developer", className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400" },
            ]}
            className="text-white drop-shadow-lg font-orbitron"
            cursorClassName="bg-blue-400"
          />

          <TextGenerateEffect
            segments={[
              { type: 'text', content: 'Machine Learning & Deep Learning Engineer specializing in Computer Vision, Natural Language Processing, and AI System Architecture. Building intelligent, production-ready solutions with' },
              {
                type: 'component',
                content: (
                  <Skill name="PyTorch" href="https://pytorch.org/">
                    <Image src="/skills/pytorch.svg" alt="PyTorch" width={20} height={20} />
                  </Skill>
                ),
                key: 'pytorch'
              },
              { type: 'text', content: ',' },
              {
                type: 'component',
                content: (
                  <Skill name="TensorFlow" href="https://www.tensorflow.org/">
                    <Image src="/skills/tensorflow.svg" alt="TensorFlow" width={20} height={20} />
                  </Skill>
                ),
                key: 'tensorflow'
              },
              { type: 'text', content: ', and' },
              {
                type: 'component',
                content: (
                  <Skill name="Hugging Face" href="https://huggingface.co/">
                    <Image src="/skills/huggingface.svg" alt="Hugging Face" width={20} height={20} />
                  </Skill>
                ),
                key: 'huggingface'
              },
              { type: 'text', content: '. Expertise in model optimization, real-time inference pipelines, and scalable ML deployment.' },
            ]}
            className="text-gray-100 drop-shadow-md"
            duration={0.5}
            filter={true}
          />
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
    </section >
  );
}
