"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ScrollTilt({
    children,
}: {
    children: React.ReactNode;
}) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const rotateX = useTransform(
        scrollYProgress,
        [0, 1],
        [20, 0]
    );

    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [1, 1]
    );

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 0]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2],
        [0.6, 1]
    );

    return (
        <div ref={ref}>
            <motion.div
                style={{
                    rotateX,
                    scale,
                    y,
                    opacity,
                    transformPerspective: 1400,
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}