import BackgroundImage from "./BackgroundImage";

export default function HeroBackground() {
  return (
    <BackgroundImage
      src="/images/backgrounds/home-1.avif"
      width={1078}
      height={1078}
      className="
        pointer-events-none
        absolute
        -z-10
        max-w-none
        -translate-x-1/2
        -rotate-90
        top-[-646px]
        blur-3xl
        left-[-250px]
        tablet:left-1/2
        tablet:top-[-800px]
        desktop:top-[-750px]
      "
    />
  );
}
