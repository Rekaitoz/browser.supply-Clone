"use client";

import {
    useAnimationFrame,
    useMotionValue,
    motion,
} from "motion/react";
import {
    Children,
    useMemo,
    useRef,
} from "react";

interface Props {
    children: React.ReactNode;
    direction?: "up" | "down";
    speed?: number;
    gap?: number;
}

export default function TickerColumn({
    children,
    direction = "up",
    speed = 20,
    gap = 20,
}: Props) {

    const y = useMotionValue(0);
    const ref = useRef<HTMLDivElement>(null);

    const items = Children.toArray(children);

    /**
     * kalau item sedikit, ulangi sampai minimal 6
     */
    const normalized = useMemo(() => {
        let result = [...items];

        while (result.length < 6) {
            result = [...result, ...items];
        }

        return result;
    }, [items]);

    /**
     * duplicate untuk infinite loop
     */
    const duplicated = [...normalized, ...normalized];

    useAnimationFrame((_, delta) => {

        const container = ref.current;
        if (!container) return;

        const half = container.scrollHeight / 2;

        let next = y.get();

        const move = speed * delta / 1000;

        next += direction === "up"
            ? -move
            : move;

        while (next <= -half)
            next += half;

        while (next >= 0)
            next -= half;

        y.set(next);

    });

    return (
        <div className=" h-full">
            <motion.div
                ref={ref}
                style={{ y }}
                className="flex flex-col"
            >
                {duplicated.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            marginBottom:
                                index === duplicated.length - 1
                                    ? 0
                                    : gap,
                        }}
                    >
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}