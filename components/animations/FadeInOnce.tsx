"use client";

import { useEffect, useRef, useState } from "react";

type FadeInOnceProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  trigger?: "mount" | "scroll";
  offset?: number;
};

export default function FadeInOnce({
  children,
  className = "",
  delay = 0,
  trigger = "scroll",
  offset = 32,
}: FadeInOnceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (trigger === "mount") {
      const timer = window.setTimeout(() => setIsVisible(true), delay);
      return () => window.clearTimeout(timer);
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay, trigger]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${offset}px)`,
        transition: "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
