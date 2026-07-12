"use client";

import { motion } from "motion/react";

interface BrandPulseProps {
    children: React.ReactNode;
    index: number;
    expandedEven: boolean;
    expandedSize?: number;
    collapsedSize?: number;
}

export default function BrandPulse({
    children,
    index,
    expandedEven,
    expandedSize = 35,
    collapsedSize = 20,
}: BrandPulseProps) {
    const isEven = index % 2 === 0;

    const expanded = expandedEven ? isEven : !isEven;

    return (
        <motion.div
            layout
            animate={{
                width: expanded ? expandedSize : collapsedSize,
                height: expanded ? expandedSize : collapsedSize,
            }}
            transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center justify-center overflow-hidden"
        >
            {children}
        </motion.div>
    );
}