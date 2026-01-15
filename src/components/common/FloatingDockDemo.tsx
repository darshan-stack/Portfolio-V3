'use client';

import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandMedium,
    IconHome,
    IconBriefcase,
    IconCode,
    IconArticle,
    IconMail,
} from '@tabler/icons-react';

export function FloatingDockDemo() {
    const links = [
        {
            title: 'Home',
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: '/',
        },
        {
            title: 'Work Experience',
            icon: (
                <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: '/work-experience',
        },
        {
            title: 'Projects',
            icon: (
                <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: '/projects',
        },
        {
            title: 'Blog',
            icon: (
                <IconArticle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: '/blog',
        },
        {
            title: 'Contact',
            icon: (
                <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: '/contact',
        },
        {
            title: 'LinkedIn',
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: 'https://www.linkedin.com/in/darshanxdevs/',
        },
        {
            title: 'Medium',
            icon: (
                <IconBrandMedium className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: 'https://medium.com/@darshanmistaridz',
        },
        {
            title: 'GitHub',
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: 'https://github.com/darshanxdevs',
        },
    ];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 scale-75">
            <FloatingDock items={links} />
        </div>
    );
}
