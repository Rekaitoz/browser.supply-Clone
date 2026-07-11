"use client";

import { motion } from "motion/react";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    y?: number;
    blur?: number;
    duration?: number;
    className?: string;
}

export default function FadeIn({
    children,
    delay = 0,
    y = 13,
    blur = 10,
    duration = 4,
    className = "",
}: FadeInProps) {
    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                y,
                filter: `blur(${blur}px)`,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
            }}
            viewport={{
                once: true,
                amount: 1,
            }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}