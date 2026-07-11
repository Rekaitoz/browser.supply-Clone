"use client";

import { routes } from "@/config/routes";
import Button from "../Button";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import Image from "next/image";

export default function Navbar() {

  return (
    <header className="fixed w-full top-0 z-50 py-5 px-10  mask-[linear-gradient(to_bottom,black_50%,transparent_100%)] backdrop-blur-lg ">
      <div className="mx-auto flex  items-center justify-between px-10  max-w-sm tablet:max-w-3xl desktop:max-w-[1440px]">
        <div className="flex items-center">
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
            className="text-[16px] font-semibold tracking-tight text-white "
          >
            Browser.clone
          </Button>
        </div>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-0.5">

            {routes.map(({ href, label }) => {

              return (
                <li key={href}>
                  <Button className="font-bold text-[16px]" paddingX="px-2" href={href}>{label}</Button>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
          <BsTwitterX size={20} />
          <BsYoutube size={24} />
          <Button className="font-bold text-[16px]" rounded bgColor="bg-[#1c1c1c]">Bundle</Button>
        </div>
      </div>
    </header>
  );
}
