// components/background/HeroBackground.tsx

import BackgroundImage from "./BackgroundImage";

export default function HeroBackground() {
    return (
        <>
            <BackgroundImage
                src="/images/backgrounds/home-1.avif"
                width={1078}
                height={1078}
                className="
                max-w-none
          left-1/2
          -translate-x-1/2
          top-[-665px]
          -rotate-90
          blur-3xl
          opacity-80
          -z-10
        "
            />
        </>
    );
}