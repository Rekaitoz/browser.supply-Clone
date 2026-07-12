"use client";

import TickerColumn from "./TickerColumn";

interface Props {
    columns: React.ReactNode[][];
    className?: string;

    speed?: number;
    gap?: number;
}

export default function InfiniteTicker({
    columns,
    className = "",
    speed = 18,
    gap = 20,
}: Props) {
    return (
        <div
            className={`
      absolute inset-0  pointer-events-none
      ${className}
      `}
        >
            <div className="flex h-full gap-3">
                {columns.map((column, i) => (
                    <div
                        key={i}
                        className="flex-1"
                    >
                        <TickerColumn
                            direction={i % 2 ? "up" : "down"}
                            speed={speed}
                            gap={gap}

                        >
                            {column}
                        </TickerColumn>
                    </div>
                ))}
            </div>
        </div>
    );
}