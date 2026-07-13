"use client";

import { motion } from "motion/react";

interface Props {
  children: React.ReactNode;
  direction?: "left" | "right";
  duration?: number;
}

export default function ReviewTicker({
  children,
  direction = "left",
  duration = 40,
}: Props) {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex w-max gap-0"
        animate={{
          x: direction === "left"
            ? ["0%", "-50%"]
            : ["-50%", "0%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}