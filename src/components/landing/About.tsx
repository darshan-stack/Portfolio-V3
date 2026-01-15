import { about, mySkills } from '@/config/About';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { CardSpotlight } from '../ui/card-spotlight';

export default function About() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />
      {/* About me */}
      <div className="mt-8">
        <CardSpotlight className="bg-black/40 dark:bg-black/60">
          <div className="flex flex-col gap-6 md:flex-row p-6">
            <Image
              src="/assets/profile.png"
              alt="Darshan Mistari"
              width={240}
              height={240}
              className="size-60 rounded-lg object-cover shadow-xl"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white">{about.name}</h3>
              <p className="text-gray-100 dark:text-gray-200 mt-4 leading-relaxed">{about.description}</p>
              <p className="text-white mt-8 font-bold text-lg">Skills</p>
              <div className="flex flex-wrap gap-2">
                {mySkills.map((skill) => (
                  <Tooltip key={skill.key}>
                    <TooltipTrigger asChild>
                      <div className="mt-4 size-6 hover:cursor-pointer">
                        {skill}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{skill.key}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </CardSpotlight>
      </div>
    </Container>
  );
}
