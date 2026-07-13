"use client";

import { motion } from "motion/react";

interface AvatarSwingProps {
    children: React.ReactNode;
    rotateLeft?: number;
    rotateRight?: number;
    duration?: number;
    swingRight?: boolean;
}

export default function AvatarSwing({
    children,
    rotateLeft = -10,
    rotateRight = 10,
    duration = 0.3,
    swingRight = true,
}: AvatarSwingProps) {
    return (
        <motion.div
            animate={{
                rotate: swingRight
                    ? rotateRight
                    : rotateLeft,
            }}
            transition={{
                duration,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-flex"
        >
            {children}
        </motion.div>
    );
}