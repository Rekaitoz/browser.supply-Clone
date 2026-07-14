import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";
import FadeIn3D from "@/components/animations/FadeIn3D";
import Link from "next/link";
import { getLive } from "@/lib/api";

export default async function LiveExample() {
  const liveData = await getLive();


  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10">
      <section
        aria-labelledby="home-heading"
        className="relative mx-auto flex w-full flex-col items-center border border-[#212121] border-y-0 font-sans max-w-md tablet:max-w-4xl desktop:max-w-[1440px]"
      >
        <section className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 w-full">
          {liveData.map((template) => (
            <Link
              href={`templates/${template.template}`}
              key={template.id}
              className={`
                group
                flex flex-col
                px-5
                tablet:px-8
                py-5
                tablet:py-10
                transition-colors
                duration-300
                gap-8
                bg-[rgba(43,43,43,0)]
              hover:bg-[rgba(43,43,43,0.5)]
              border-[#212121]
                border-r
                border-b
                cursor-pointer
                `}
            >
              <FadeIn3D>

                <video
                  className="
                  h-full
                  w-full
                  object-cover
                  rounded-md
                  "
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source
                    src={template.video}
                    type="video/mp4"
                  />
                </video>

              </FadeIn3D>

              <FadeIn y={10} blur={0} duration={1.5} className="space-y-3">
                <div className="flex items-center gap-x-5">
                  <div className="relative aspect-4/4 w-auto h-8 shadow-[0px_0.784px_0.392px_-0.357px_rgba(0,0,0,0.13),0px_1.92px_0.96px_-0.714px_rgba(0,0,0,0.13),0px_3.637px_1.819px_-1.071px_rgba(0,0,0,0.13),0px_6.35px_3.175px_-1.429px_rgba(0,0,0,0.13),0px_11.052px_5.526px_-1.786px_rgba(0,0,0,0.13),0px_20.243px_10.121px_-2.143px_rgba(0,0,0,0.13),0px_40px_20px_-2.5px_rgba(0,0,0,0.13)]">
                    <Image
                      src={template.profileImage}
                      alt={template.profileImage}
                      fill
                      className="
                    object-cover
                    rounded-sm
                    overflow-hidden
                    "
                    />
                  </div>
                  <h2 className="font-gambetta text-[28px] text-white">
                    {template.name}
                  </h2>

                </div>
                <div className="flex items-center gap-x-5 font-bold text-[12px] text-[#ababab] uppercase">
                  <p>
                    TEMPLATE USED: {template.template}
                  </p>
                  <div className="relative aspect-6/4 w-auto h-7">
                    <Image
                      src={template.templateImage}
                      alt={template.templateImage}
                      fill
                      className="
                    object-cover
                    rounded-sm
                    overflow-hidden
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    hover:-translate-y-3
                    "
                    />
                  </div>
                </div>
              </FadeIn>
            </Link>
          ))}
        </section>
      </section>
    </section>
  );
}
