import { Link } from 'next-view-transitions';
import React from 'react';

interface SkillProps {
  name: string;
  href: string;
  children: React.ReactNode;
}

export default function Skill({ name, href, children }: SkillProps) {
  return (
    <Link
      href={href ?? ''}
      target="_blank"
      data-perch
      className="skill-inner-shadow inline-flex items-center self-end rounded-md border border-zinc-700/50 bg-zinc-800/60 backdrop-blur-sm px-2.5 py-1.5 text-sm transition-all hover:bg-zinc-800/80 hover:backdrop-blur-md"
    >
      <div className="size-5 flex-shrink-0">{children}</div>
      <p className="ml-2 text-sm font-bold">{name}</p>
    </Link>
  );
}
