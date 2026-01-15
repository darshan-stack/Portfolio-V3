"use client";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

import { cn } from "@/lib/utils";

export interface TextSegment {
    type: 'text' | 'component';
    content: string | React.ReactNode;
    key?: string;
}

export const TextGenerateEffect = ({
    words,
    segments,
    className,
    filter = true,
    duration = 0.5,
}: {
    words?: string;
    segments?: TextSegment[];
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope, { once: true });

    useEffect(() => {
        if (isInView) {
            animate(
                ".animate-word",
                {
                    opacity: 1,
                    filter: filter ? "blur(0px)" : "none",
                },
                {
                    duration: duration ? duration : 1,
                    delay: stagger(0.1),
                }
            );
        }
    }, [isInView, animate, filter, duration]);

    const renderSegments = () => {
        if (segments) {
            return (
                <motion.div ref={scope} className="inline-flex flex-wrap items-center gap-x-1.5 gap-y-2">
                    {segments.map((segment, idx) => {
                        if (segment.type === 'component') {
                            return (
                                <motion.span
                                    key={segment.key || `component-${idx}`}
                                    className="animate-word opacity-0 inline-flex items-center"
                                    style={{
                                        filter: filter ? "blur(10px)" : "none",
                                    }}
                                >
                                    {segment.content}
                                </motion.span>
                            );
                        } else {
                            // Split text into words
                            const words = (segment.content as string).split(' ');
                            return words.map((word, wordIdx) => (
                                <motion.span
                                    key={`${segment.key || idx}-${wordIdx}`}
                                    className="animate-word opacity-0"
                                    style={{
                                        filter: filter ? "blur(10px)" : "none",
                                    }}
                                >
                                    {word}{" "}
                                </motion.span>
                            ));
                        }
                    })}
                </motion.div>
            );
        }

        // Fallback to simple word rendering
        const wordsArray = words?.split(" ") || [];
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="animate-word opacity-0"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-normal", className)}>
            <div className="mt-4">
                <div className="text-sm md:text-base leading-snug tracking-wide">
                    {renderSegments()}
                </div>
            </div>
        </div>
    );
};
