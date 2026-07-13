import BackgroundImage from "./BackgroundImage";

export default function BundlePriceBackground() {
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
        
        rotate-150
        blur-3xl
        left-[-250px]
        tablet:translate-x-[-30%]
        tablet:left-1/2
        top-[-300px]
        tablet:top-[-300px]
        desktop:top-[-300px]
      "
    />
  );
}
