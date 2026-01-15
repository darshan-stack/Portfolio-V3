"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const CardSpotlight = ({
    children,
    radius = 350,
    color = "#262626",
    className,
    ...props
}: {
    radius?: number;
    color?: string;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent<HTMLDivElement>) {
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "group/spotlight relative rounded-md border border-neutral-800 bg-transparent backdrop-blur-sm p-10 dark:border-neutral-800",
                className
            )}
            onMouseMove={handleMouseMove}
            {...props}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px z-0 rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              ${color},
              transparent 80%
            )
          `,
                }}
            />
            {children}
        </div>
    );
};
