"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ path, text }: { path: string; text: string }) => {
  const pathname = usePathname();
  const isActive = path === pathname;

  return (
    <Link
      href={path}
      className={`px-[1em] transition-all delay-75 hover:text-shadow-lg/40 focus:underline focus:text-secondary hover:-translate-y-0.5 ${
        isActive ? "text-[#0C8A91] font-black text-shadow-lg/30 underline" : ""
      }`}
    >
      {text}
    </Link>
  );
};

export const NavBar = ({ vertical }: { vertical: boolean }) => {
  const verticalStyles = "flex flex-col text-[1.50em] gap-5 text-primary";
  const horizontalStyles =
    "flex justify-between text-primary tracking-[2px] text-[1.2em] text-center";
  return (
    <nav className={vertical ? verticalStyles : horizontalStyles}>
      <NavLink path="/portfolio" text="Portfolio" />
      <NavLink path="/blog" text="Blog" />
      <NavLink path="/about" text="About" />
      <NavLink path="/contact" text="Contact" />
    </nav>
  );
};
