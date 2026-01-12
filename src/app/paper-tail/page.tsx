'use client';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Container from '@/components/common/Container';
import { dailyPapers } from '@/config/PaperTail';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';
import ArrowRight from '@/components/svgs/ArrowRight';
import ArrowLeft from '@/components/svgs/ArrowLeft';
import Calender from '@/components/svgs/Calender';

export default function PaperTailPage() {
  return (
    <Container className="min-h-screen py-16">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
      </div>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Daily Paper-Tail</h1>
        <p className="text-muted-foreground">
          My daily reading log of influential papers in ML/AI with implementation insights
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {dailyPapers.map((paper) => {
          const formattedDate = new Date(paper.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });

          return (
            <Link key={paper.id} href={`/paper-tail/${paper.id}`}>
              <Card className="group h-full w-full overflow-hidden border-0 p-0 shadow-none transition-all">
                <CardHeader className="p-0">
                  <div className="relative flex items-center justify-between bg-muted px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        Log #{paper.logNumber}
                      </span>
                      {paper.isRecent && (
                        <Badge variant="secondary" className="text-xs">
                          Recent
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h3 className="group-hover:text-primary line-clamp-2 text-xl leading-tight font-semibold">
                      {paper.title}
                    </h3>
                    <div className="mt-4 space-y-3">
                      <p className="text-secondary text-sm">
                        <span className="font-semibold text-foreground">Significance:</span>{' '}
                        {paper.significance}
                      </p>
                      <p className="text-secondary text-sm">
                        <span className="font-semibold text-foreground">Challenge:</span>{' '}
                        {paper.challenge}
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <div className="flex w-full flex-col space-y-3">
                    {/* Technology Icons */}
                    <div className="flex flex-wrap gap-1.5">
                      {paper.tags.map((tag) => {
                        const iconMap: { [key: string]: string } = {
                          'PyTorch': '/skills/pytorch.svg',
                          'TensorFlow': '/skills/tensorflow.svg',
                          'Python': '/skills/python.svg',
                          'Transformers': '/skills/huggingface.svg',
                          'NLP': '/skills/huggingface.svg',
                          'LLM': '/skills/huggingface.svg',
                          'Fine-tuning': '/skills/python.svg',
                          'Optimization': '/skills/python.svg',
                          'Computer Vision': '/skills/opencv.svg',
                          'Real-time': '/skills/pytorch.svg',
                          'Edge AI': '/skills/pytorch.svg',
                          'ResNet': '/skills/tensorflow.svg',
                          'Architecture': '/skills/python.svg',
                        };
                        const icon = iconMap[tag];
                        if (!icon) return null;
                        return (
                          <div
                            key={tag}
                            className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#111111] border border-zinc-800"
                          >
                            <Image
                              src={icon}
                              alt={tag}
                              width={14}
                              height={14}
                              className="flex-shrink-0"
                            />
                            <span className="text-[10px] font-mono text-zinc-300">{tag}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {paper.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-2">
                      <time
                        className="text-secondary flex items-center gap-2 text-sm"
                        dateTime={paper.date}
                      >
                        <Calender className="size-4" /> {formattedDate}
                      </time>
                      <div className="text-secondary flex items-center justify-end gap-2 underline-offset-4 hover:underline">
                        Read Paper <ArrowRight className="size-4" />
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
