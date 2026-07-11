"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HiX } from "react-icons/hi";
import { BsTwitterX, BsYoutube } from "react-icons/bs";

import { routes } from "@/config/routes";
import Button from "../Button";
import { LiaGripLinesSolid } from "react-icons/lia";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 810) setIsOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 grid w-full backdrop-blur-lg transition-[grid-template-rows] ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen
        ? "grid-rows-[auto_1fr] h-dvh duration-700"
        : "grid-rows-[auto_0fr] h-auto mask-[linear-gradient(to_bottom,black_50%,transparent_100%)] duration-1000"
        }`}
    >
      <div className="relative py-4 px-10">
        <div className="mx-auto flex w-full px-10 max-w-md tablet:max-w-4xl desktop:max-w-[1440px] items-center justify-between">
          <div className="flex min-w-0 items-center">
            <Image
              src="/images/logo/logo-1.avif"
              alt=""
              aria-hidden
              priority
              width={20}
              height={20}
            />
            <Button
              href="/"
              paddingX="px-3"
              paddingY="py-2"
              className="truncate text-[16px] font-semibold tracking-tight text-white"
            >
              Browser.clone
            </Button>
          </div>

          <nav
            aria-label="Main navigation"
            className="hidden tablet:block"
          >
            <ul className="flex items-center gap-0.5">
              {routes.map(({ href, label }) => (
                <li key={href}>
                  <Button
                    className="text-[16px] font-bold"
                    paddingX="px-2"
                    paddingY="py-2"
                    href={href}
                  >
                    {label}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-x-4 tablet:flex">
            <BsTwitterX size={20} aria-hidden />
            <BsYoutube size={24} aria-hidden />
            <Button
              className="text-[16px] font-bold"
              paddingX="px-4"
              paddingY="py-2"
              rounded
              bgColor="bg-[#1c1c1c]"
            >
              Bundle
            </Button>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white tablet:hidden"
          >
            {isOpen ? <HiX size={24} /> : <LiaGripLinesSolid size={42} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className="min-h-0 overflow-hidden"
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex h-full min-h-full w-full max-w-md flex-col px-10 pb-8 pt-2 tablet:hidden"
        >
          <ul className="flex flex-col gap-1">
            {routes.map(({ href, label }) => (
              <li key={href}>
                <Button
                  href={href}
                  className="w-full justify-start text-[15px] font-bold"
                  paddingX="px-0"
                  paddingY="py-3"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Button>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center gap-x-5 px-1 ">
            <BsTwitterX size={20} aria-hidden />
            <BsYoutube size={24} aria-hidden />
          </div>

          <Button
            className="mt-10 w-full text-[15px] font-bold"
            rounded
            bgColor="bg-[#fff]"
            textColor="text-black"
            fullWidth
            onClick={() => setIsOpen(false)}
          >
            Full-kit
          </Button>
        </nav>
      </div>
    </header>
  );
}
