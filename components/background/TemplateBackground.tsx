import BackgroundImage from "./BackgroundImage";

export default function TemplateBackground() {
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
        rotate-70
        blur-3xl
        translate-x-[10%]
        tablettt:translate-x-[-30%]
        left-1/2
        top-[1400px]
        tablet:top-[1200px]
        desktop:top-[1200px]
      "
    />
  );
}
