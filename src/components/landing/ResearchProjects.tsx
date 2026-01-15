'use client';

import { CardSpotlight } from '@/components/ui/card-spotlight';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface ResearchProject {
  title: string;
  description: string;
  novelty?: string;
  impact?: string;
  tags: string[];
  technologies?: { name: string; icon: string }[];
  github?: string;
  demo?: string;
}

const projects: ResearchProject[] = [
  {
    title: 'Multi-agent LLM Orchestration',
    description:
      'A system integrating textual and visual information for enhanced contextual precision in multi-agent workflows.',
    impact: '60% improvement in contextual accuracy',
    tags: ['Multi-Agent Systems', 'LLM', 'Retrieval'],
    technologies: [
      { name: 'Python', icon: '/skills/python.svg' },
      { name: 'Hugging Face', icon: '/skills/huggingface.svg' },
      { name: 'FastAPI', icon: '/skills/fastapi.svg' },
    ],
    github: 'https://github.com/satyam/multi-agent-llm',
  },
  {
    title: 'Test-Time Compute for Code Generation',
    novelty: 'Critic-Actor Loop',
    description:
      'A coding agent that generates an internal Verification Plan and uses a Tree of Thoughts approach to backtrack if unit tests fail.',
    tags: ['Code Generation', 'Test-Time Compute', 'Tree of Thoughts'],
    technologies: [
      { name: 'Python', icon: '/skills/python.svg' },
      { name: 'PyTorch', icon: '/skills/pytorch.svg' },
    ],
    github: 'https://github.com/satyam/test-time-compute',
    demo: 'https://demo.test-time-compute.ai',
  },
];

export default function ResearchProjects() {
  return (
    <section className="py-16">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Research Projects</h2>
          <p className="text-muted-foreground text-xs">
            Novel contributions to machine learning and AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project, index) => (
            <CardSpotlight
              key={index}
              className="p-4"
              radius={300}
              color="#1e40af"
            >
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-base mb-1.5 text-white dark:text-white">{project.title}</h3>
                  {project.novelty && (
                    <p className="text-xs font-bold mb-2 text-white dark:text-white">
                      <span className="text-gray-300 dark:text-gray-400">Novel:</span> {project.novelty}
                    </p>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-white dark:text-white">
                  {project.description}
                </p>

                {project.impact && (
                  <p className="text-sm font-bold text-white dark:text-white">{project.impact}</p>
                )}

                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold px-2 py-1 rounded bg-theme-accent text-theme-muted border border-theme"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-theme-accent border border-theme"
                      >
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={14}
                          height={14}
                          className="flex-shrink-0"
                        />
                        <span className="text-[10px] font-mono text-theme-muted">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex gap-2 pt-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] px-2 py-1 rounded border border-theme bg-theme-subtle hover:bg-gray-200 dark:hover:bg-zinc-800 border-theme-hover transition-all flex items-center gap-1 text-theme-primary"
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] px-2 py-1 rounded border border-theme bg-theme-subtle hover:bg-gray-200 dark:hover:bg-zinc-800 border-theme-hover transition-all flex items-center gap-1 text-theme-primary"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
