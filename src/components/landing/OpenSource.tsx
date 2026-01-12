'use client';

import { ChevronDown, ExternalLink } from 'lucide-react';
import React, { useState } from 'react';
import Image from 'next/image';

interface Technology {
  name: string;
  iconPath: string;
}

interface OSContribution {
  platform: string;
  platformIconPath: string;
  role: string;
  yearRange: string;
  location: string;
  technologies: Technology[];
  details?: string;
  url: string;
}

// Tech Pill Component for consistent rendering
const TechPill: React.FC<{ tech: Technology }> = ({ tech }) => {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#111111] border border-zinc-800 hover:border-zinc-700 transition-colors">
      <Image
        src={tech.iconPath}
        alt={tech.name}
        width={20}
        height={20}
        className="flex-shrink-0"
      />
      <span className="text-sm font-mono whitespace-nowrap">{tech.name}</span>
    </div>
  );
};

const contributions: OSContribution[] = [
  {
    platform: 'Kaggle',
    platformIconPath: '/skills/kaggle.svg',
    role: 'Open Source Contributor',
    yearRange: '2023 - Present',
    location: 'Remote',
    technologies: [
      { name: 'Python', iconPath: '/skills/python.svg' },
      { name: 'PyTorch', iconPath: '/skills/pytorch.svg' },
      { name: 'TensorFlow', iconPath: '/skills/tensorflow.svg' },
      { name: 'scikit-learn', iconPath: '/skills/scikit-learn.svg' },
    ],
    details: 'Ranked top 1% in multiple ML competitions|Published 15+ notebooks with practical implementations of state-of-the-art models|Contributed to community discussions and shared reproducible research',
    url: 'https://kaggle.com/satyam',
  },
  {
    platform: 'Hugging Face',
    platformIconPath: '/skills/huggingface.svg',
    role: 'Open Source Contributor',
    yearRange: '2023 - Present',
    location: 'Remote',
    technologies: [
      { name: 'Transformers', iconPath: '/skills/huggingface.svg' },
      { name: 'PyTorch', iconPath: '/skills/pytorch.svg' },
      { name: 'TensorFlow', iconPath: '/skills/tensorflow.svg' },
      { name: 'Python', iconPath: '/skills/python.svg' },
    ],
    details: 'Published 8+ fine-tuned transformer models for NLP tasks|Created datasets for domain-specific applications|Maintained model cards with comprehensive documentation and usage examples',
    url: 'https://huggingface.co/satyam',
  },
];

export default function OpenSource() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleDetails = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section className="py-16 w-full">
      {/* Content Layer */}
      <div className="w-[800px] mx-auto space-y-8">
        {/* Section Header */}
        <div className="animate-fade-in-up">
          <h2 className="text-3xl font-serif font-bold text-white mb-1">
            Featured Open Source Work
          </h2>
        </div>

        {/* Work Items */}
        <div className="space-y-6">
          {contributions.map((contribution, index) => {
            const isExpanded = expandedItems.has(index);

            return (
              <div
                key={index}
                className={`group p-6 transition-all duration-300 ${
                  index === 0 ? 'animate-fade-in-up-delay-1' : 'animate-fade-in-up-delay-2'
                }`}
              >
                {/* Header Row - Flexbox alignment */}
                <div className="flex items-start justify-between mb-4">
                  {/* Left Side: Icon + Platform + Link */}
                  <div className="flex items-center gap-3">
                    <Image
                      src={contribution.platformIconPath}
                      alt={contribution.platform}
                      width={24}
                      height={24}
                      className="flex-shrink-0"
                    />
                    <a
                      href={contribution.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-base font-bold text-white hover:underline decoration-1 underline-offset-2 flex items-center gap-1.5 transition-colors"
                    >
                      {contribution.platform}
                      <ExternalLink size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>

                  {/* Right Side: Date Range + Location */}
                  <div className="text-right flex flex-col gap-0.5">
                    <p className="text-xs font-mono text-zinc-400 tracking-tight">
                      {contribution.yearRange}
                    </p>
                    <p className="text-xs font-mono text-zinc-500 tracking-tight">
                      {contribution.location}
                    </p>
                  </div>
                </div>

                {/* Role Label */}
                <p className="text-sm font-mono font-bold text-white mb-5">
                  {contribution.role}
                </p>

                {/* Technology Pills - Refined spacing */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {contribution.technologies.map((tech, techIdx) => (
                    <TechPill key={techIdx} tech={tech} />
                  ))}
                </div>

                {/* View Details Toggle */}
                <button
                  onClick={() => toggleDetails(index)}
                  className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors group/btn"
                >
                  <ChevronDown
                    size={13}
                    className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                  />
                  <span className="group-hover/btn:underline underline-offset-2">View details</span>
                </button>

                {/* Expandable Details Section */}
                {isExpanded && contribution.details && (
                  <div className="mt-5 pt-5 border-t border-zinc-800 animate-fade-in-up">
                    <ul className="space-y-2">
                      {contribution.details.split('|').map((point, idx) => (
                        <li key={idx} className="flex gap-2 text-sm font-mono text-zinc-400 leading-relaxed">
                          <span className="text-zinc-500 mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
