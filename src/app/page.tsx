import Link from "next/link";
import { GhostButton, RevealOnScroll } from "@/Components/common";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "John Flynn",
  description:
    "React/React Native developer focused on building clean, maintainable experiences",
};

export default function Home() {
  return (
    <>
      <div
        className={`flex flex-col items-center bg-cover bg-[position:70%_bottom]
         md:bg-cover md:bg-top bg-no-repeat min-h-[200vh] sm:min-h-[135vh] bg-[url(/images/mountains-bg.jpg)] bg-primary`}
      >
        <div className="flex flex-col flex-1 pt-40 md:pt-80 text-center">
          <div>
            <h1 className="text-5xl sm:text-6xl">John Flynn</h1>
            <div className="pt-3 text-2xl font-thin">
              <em>SOFTWARE DEVELOPER SPECIALIZING IN REACT/REACT NATIVE</em>
            </div>
          </div>
        </div>
        <RevealOnScroll className="flex flex-col max-w-4xl items-center bg-primary rounded-2xl px-7 sm:px-15 py-6 mb-40 shadow-lg/35">
          <div className="flex pb-5 max-w-75 sm:max-w-none text-sm sm:text-base">
            I&apos;m a React / React Native developer focused on building clean,
            maintainable mobile experiences. I enjoy collaborating with
            thoughtful teams and solving real-world problems.
          </div>
          <Link href="/about">
            <GhostButton text="Read more" />
          </Link>
        </RevealOnScroll>
      </div>
    </>
  );
}
