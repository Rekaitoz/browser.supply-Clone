"use client";

import FadeIn from "../animations/FadeIn";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import Button from "../Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import AvatarSwing from "../animations/AvatarSwing";

export default function Footer() {
  const [swingRight, setSwingRight] = useState(true);

  const routes = [
    [
      { href: "/templates", label: "Templates" },
      { href: "/live", label: "Live examples" },
      { href: "/bundle", label: "Bundle" },
      { href: "/blog", label: "Blog" },
    ],
    [
      { href: "/quiz", label: "Quiz" },
      { href: "/support", label: "Support" },
      { href: "/privacy", label: "Privacy" },
    ]
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setSwingRight(prev => !prev);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10">
      <section
        aria-labelledby="home-heading"
        className="relative mx-auto flex w-full flex-col items-center border border-[#212121] border-y-0 font-sans max-w-md tablet:max-w-4xl desktop:max-w-[1440px]"
      >
        <section className="w-full flex flex-col text-center tablet:text-start items-center tablet:items-start tablet:flex-row justify-between gap-8 px-5 tablet:px-5 desktop:px-10 pt-10 tablet:pt-10 desktop:pt-10 pb-10 border-b border-[#212121]">
          <FadeIn y={13} blur={0} duration={2} className="flex flex-col gap-3">
            <h1
              id="home-heading"
              className="font-gambetta text-[28px] tablet:text-[28px] desktop:text-[28px] font-medium leading-[1.3] tracking-tight text-white"
            >
              Browser.supply
            </h1>
            <p className="w-full max-w-xl text-[14px] leading-7 text-[#ABABAB] tablet:text-[15px] tablet:leading-7">
              Launch your online business with a<br />premium Framer website template.
            </p>
            <span className="flex justify-center tablet:justify-start items-center gap-x-5">
              <BsTwitterX size={16} aria-hidden />
              <BsYoutube size={20} aria-hidden />
            </span>
          </FadeIn>
          <FadeIn y={13} blur={0} duration={2} className="flex flex-col tablet:flex-row gap-9">
            <ul className="flex flex-col items-center tablet:items-start gap-1">
              {routes[0].map(({ href, label }) => (
                <li key={href}>
                  <Button
                    className="text-[16px] font-semibold"
                    paddingX="px-2"
                    paddingY="py-2"
                    href={href}
                  >
                    {label}
                  </Button>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col items-center tablet:items-start gap-1">
              {routes[1].map(({ href, label }) => (
                <li key={href}>
                  <Button
                    className="text-[16px] font-semibold"
                    paddingX="px-2"
                    paddingY="py-2"
                    href={href}
                  >
                    {label}
                  </Button>
                </li>
              ))}
            </ul>

          </FadeIn>
        </section>
        <section className="w-full flex flex-col items-center tablet:flex-row justify-between gap-8 px-5 tablet:px-5 desktop:px-10 py-5 border-b border-[#212121]">
          <FadeIn y={13} blur={0} duration={2} className="flex flex-col gap-3">
            <p className="w-full max-w-xl text-[14px] leading-7 text-[#ABABAB] tablet:text-[14px] tablet:leading-8">
              © 2026 browser.supply. <span className="text-white">Framer</span> website templates
            </p>
          </FadeIn>
          <FadeIn y={13} blur={0} duration={2} className="flex flex-col gap-3">
            <div className="w-full flex item-center gap-x-3 max-w-xl text-[14px] leading-7 text-[#ABABAB] tablet:text-[14px] tablet:leading-8">
              Created by
              <AvatarSwing swingRight={swingRight}>
                <div className="relative h-8 w-8">
                  <Image
                    src="/images/owner.avif"
                    alt="Owner"
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
              </AvatarSwing>
              <span className="text-white">Ramish Aziz</span>
            </div>
          </FadeIn>
        </section>
      </section>
    </footer>
  );
}