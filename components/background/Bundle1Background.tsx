import BackgroundImage from "./BackgroundImage";

export default function Bundle1Background() {
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
        rotate-210
        blur-3xl
        translate-x-[-20%]
        tablet:translate-x-0
        top-[3200px]
        tablet:top-[1900px]
        desktop:top-[1100px]
      "
    />
  );
}
