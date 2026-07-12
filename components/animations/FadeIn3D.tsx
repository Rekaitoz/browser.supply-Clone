"use client";

import { motion } from "motion/react";

interface FadeIn3DProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    y?: number;
    blur?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
    scale?: number;
    perspective?: number;
    className?: string;
}

export default function FadeIn3D({
    children,
    delay = 0,
    duration = 2,
    y = 13,
    blur = 0,
    rotateX = 25,
    rotateY = 0,
    rotateZ = 0,
    scale = 0.96,
    perspective = 1200,
    className = "",
}: FadeIn3DProps) {
    return (
        <motion.div
            className={className}
            style={{
                transformPerspective: perspective,
                transformStyle: "preserve-3d",
                willChange: "transform, opacity, filter",
            }}
            initial={{
                opacity: 0,
                y,
                rotateX,
                rotateY,
                rotateZ,
                scale,
                filter: `blur(${blur}px)`,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                scale: 1,
                filter: "blur(0px)",
            }}
            viewport={{
                once: true,
                amount: 0.2,
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