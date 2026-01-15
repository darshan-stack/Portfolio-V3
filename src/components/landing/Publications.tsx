'use client';

import { Globe, Bookmark, FileText } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface Publication {
  title: string;
  conference: string;
  year: number;
  status: 'Accepted' | 'Under Review' | 'Published';
  tags: string[];
  technologies?: { name: string; icon: string }[];
  url?: string;
  paper?: string;
  citation?: string;
}

const publications: Publication[] = [];

export default function Publications() {
  return (
    <section className="py-16">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Academic Publications</h2>
          <p className="text-muted-foreground text-xs">
            Peer-reviewed research in machine learning and computer vision
          </p>
        </div>

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="rounded-xl border border-theme bg-theme-card transition-all bg-theme-card-hover border-theme-hover p-5"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-base leading-tight mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-bold">{pub.conference}</span> • {pub.year} •{' '}
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium ${pub.status === 'Accepted'
                          ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                          : 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                          }`}
                      >
                        {pub.status}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {pub.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-theme-accent text-theme-muted border border-theme"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {pub.technologies && pub.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {pub.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-theme-accent border border-theme"
                      >
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={16}
                          height={16}
                          className="flex-shrink-0"
                        />
                        <span className="text-[10px] font-mono text-theme-muted">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex gap-3 pt-1">
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors"
                    >
                      <Globe className="w-3 h-3" />
                      Website
                    </a>
                  )}
                  {pub.paper && (
                    <a
                      href={pub.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors"
                    >
                      <FileText className="w-3 h-3" />
                      Paper
                    </a>
                  )}
                  {pub.citation && (
                    <button className="text-[10px] flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors">
                      <Bookmark className="w-3 h-3" />
                      Cite
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
