import ScrollTilt from "@/components/animations/ScrollTilt";



export default function Demo() {
  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10">
      <section
        aria-labelledby="home-heading"
        className="relative mx-auto flex w-full flex-col items-center border border-[#212121] border-y-0 p-5 desktop:p-10  font-sans max-w-md tablet:max-w-4xl desktop:max-w-[1440px]"
      >
        <ScrollTilt>
          <video
            className="border-2 border-[#212121] rounded-xl"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/videos/home-demo.mp4" type="video/mp4" />
          </video>
        </ScrollTilt>
      </section>
    </section>
  );
}
