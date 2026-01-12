'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type SkillCategory = 'All' | 'AI/ML/DL' | 'Python Libs' | 'Web' | 'Cloud' | 'Tools';

interface Skill {
  name: string;
  iconPath: string;
  category: SkillCategory[];
}

const skills: Skill[] = [
  { name: 'PyTorch', iconPath: '/skills/pytorch.svg', category: ['AI/ML/DL'] },
  { name: 'TensorFlow', iconPath: '/skills/tensorflow.svg', category: ['AI/ML/DL'] },
  { name: 'Hugging Face', iconPath: '/skills/huggingface.svg', category: ['AI/ML/DL'] },
  { name: 'scikit-learn', iconPath: '/skills/scikit-learn.svg', category: ['AI/ML/DL', 'Python Libs'] },
  { name: 'OpenCV', iconPath: '/skills/opencv.svg', category: ['AI/ML/DL', 'Python Libs'] },
  { name: 'Python', iconPath: '/skills/python.svg', category: ['Python Libs', 'AI/ML/DL'] },
  { name: 'NumPy', iconPath: '/skills/numpy.svg', category: ['Python Libs'] },
  { name: 'Pandas', iconPath: '/skills/pandas.svg', category: ['Python Libs'] },
  { name: 'Jupyter', iconPath: '/skills/jupyter.svg', category: ['Python Libs', 'Tools'] },
  { name: 'React', iconPath: '/skills/react.svg', category: ['Web'] },
  { name: 'Next.js', iconPath: '/skills/nextjs.svg', category: ['Web'] },
  { name: 'Node.js', iconPath: '/skills/nodejs.svg', category: ['Web'] },
  { name: 'TypeScript', iconPath: '/skills/typescript.svg', category: ['Web'] },
  { name: 'JavaScript', iconPath: '/skills/javascript.svg', category: ['Web'] },
  { name: 'FastAPI', iconPath: '/skills/fastapi.svg', category: ['Web', 'Python Libs'] },
  { name: 'Docker', iconPath: '/skills/docker.svg', category: ['Cloud', 'Tools'] },
  { name: 'Kubernetes', iconPath: '/skills/kubernetes.svg', category: ['Cloud', 'Tools'] },
  { name: 'Google Cloud', iconPath: '/skills/google-cloud.svg', category: ['Cloud'] },
  { name: 'AWS', iconPath: '/skills/aws.svg', category: ['Cloud'] },
  { name: 'PostgreSQL', iconPath: '/skills/postgresql.svg', category: ['Tools'] },
  { name: 'MongoDB', iconPath: '/skills/mongodb.svg', category: ['Tools'] },
  { name: 'Git', iconPath: '/skills/git.svg', category: ['Tools'] },
];

const categories: SkillCategory[] = ['All', 'AI/ML/DL', 'Python Libs', 'Web', 'Cloud', 'Tools'];

export default function CategorizedSkills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category.includes(activeCategory));

  return (
    <section className="py-16">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Technical Skills</h2>
          <p className="text-muted-foreground text-xs">
            Core competencies across ML, development, and infrastructure
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-zinc-950/15 backdrop-blur-md border-white/15 hover:bg-zinc-950/30 hover:border-white/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-2">
          {filteredSkills.map((skill, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-zinc-950/15 backdrop-blur-md border border-white/15 hover:bg-zinc-950/30 hover:border-white/30 transition-all duration-300"
              >
                <Image
                  src={skill.iconPath}
                  alt={skill.name}
                  width={28}
                  height={28}
                  className="flex-shrink-0"
                />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>

        {/* Skill Count */}
        <p className="text-xs text-muted-foreground">
          Showing <span className="font-bold">{filteredSkills.length}</span> skill
          {filteredSkills.length !== 1 ? 's' : ''} in{' '}
          <span className="font-bold">{activeCategory}</span>
        </p>
      </div>
    </section>
  );
}
