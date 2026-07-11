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
        top-[646px]
        blur-3xl
        
        tablet:left-1/2
        tablet:top-[-800px]
        desktop:top-[1200px]
      "
    />
  );
}
