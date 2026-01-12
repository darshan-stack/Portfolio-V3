'use client';

import { Badge } from '@/components/ui/badge';
import Container from '@/components/common/Container';
import { dailyPapers } from '@/config/PaperTail';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import ArrowLeft from '@/components/svgs/ArrowLeft';
import Calender from '@/components/svgs/Calender';

export default function PaperDetailPage({ params }: { params: { id: string } }) {
  const paper = dailyPapers.find((p) => p.id === params.id);

  if (!paper) {
    notFound();
  }

  const formattedDate = new Date(paper.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Container className="min-h-screen py-16">
      <div className="mb-8">
        <Link
          href="/paper-tail"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to all papers
        </Link>
      </div>

      {/* Title and Metadata */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Daily Log #{paper.logNumber}
          </span>
          {paper.isRecent && (
            <Badge variant="secondary" className="text-xs">
              Recent
            </Badge>
          )}
        </div>
        <h1 className="text-4xl font-bold mb-4">{paper.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calender className="size-4" />
            <time dateTime={paper.date}>{formattedDate}</time>
          </div>
          {paper.arxivId && (
            <>
              <span>•</span>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                ArXiv: {paper.arxivId}
              </a>
            </>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {paper.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Content Sections */}
      <div className="prose prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Significance</h2>
          <p className="text-muted-foreground leading-relaxed">{paper.significance}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Implementation Challenge</h2>
          <p className="text-muted-foreground leading-relaxed">{paper.challenge}</p>
        </section>

        {paper.detailedSummary && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Detailed Summary</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {paper.detailedSummary}
            </p>
          </section>
        )}

        {/* ArXiv Link */}
        <section className="mt-12 pt-8 border-t border-border">
          <a
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Read Full Paper on ArXiv
            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </section>
      </div>
    </Container>
  );
}
