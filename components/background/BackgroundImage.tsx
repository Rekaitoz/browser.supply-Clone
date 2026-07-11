// components/background/BackgroundImage.tsx

import Image from "next/image";

interface BackgroundImageProps {
    src: string;
    width: number;
    height: number;
    className?: string;
}

export default function BackgroundImage({
    src,
    width,
    height,
    className = "",
}: BackgroundImageProps) {
    return (
        <Image
            src={src}
            alt=""
            aria-hidden
            priority
            width={width}
            height={height}
            className={`
        absolute
        pointer-events-none
        select-none
        ${className}
      `}
        />
    );
}