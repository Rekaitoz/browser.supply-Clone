import FadeIn from "@/components/animations/FadeIn";
import { Template } from "@/data/templates";

interface Props {
  template: Template
}

export default function Features({ template }: Props) {

  const featureData = [
    {
      value: template?.pages,
      label: "Professionally designed pages",
    },
    {
      value: template?.cmsCollections,
      label: "CMS collections",
    },
    {
      value: template?.tutorials,
      label: "Guided video tutorial",
    },
  ];

  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10 ">
      <section
        aria-labelledby="home-heading"
        className="relative mx-auto flex w-full flex-col items-center border border-[#212121] border-y-0 font-sans max-w-md tablet:max-w-4xl desktop:max-w-[1440px]"
      >
        <div className="grid grid-cols-2 tablet:grid-cols-3 w-full">
          {featureData
            .filter((feature) => Number(feature.value) > 0)
            .map((feature) => (
              <div
                key={feature.label}
                className="
                flex flex-col items-center justify-center
                px-8 py-10 text-center
                border-r border-b border-[#212121]
                "
              >
                <FadeIn y={10} blur={0} duration={1.5}>
                  <h2 className="font-gambetta text-[32px] tablet:text-[36px] desktop:text-[44px] text-white">
                    {feature.value}
                  </h2>
                </FadeIn>

                <FadeIn y={10} blur={0} duration={1.5}>
                  <p className="mt-2 text-[14px] tablet:text-[16px] text-[#ababab]">
                    {feature.label}
                  </p>
                </FadeIn>
              </div>
            ))}

          {/* Mobile only */}
          <div
            className="
            flex tablet:hidden
            flex-col items-center justify-center
            px-8 py-10 text-center
            border-r border-b border-[#212121]
            "
          >
            <FadeIn y={10} blur={0} duration={1.5}>
              <h2 className="font-gambetta text-[32px] text-white">
                3
              </h2>
            </FadeIn>

            <FadeIn y={10} blur={0} duration={1.5}>
              <p className="mt-2 text-[14px] text-[#ababab]">
                Months Framer Pro
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </section>
  );
}
