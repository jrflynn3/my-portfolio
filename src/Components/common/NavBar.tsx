"use client";

import Link, { useLinkStatus } from "next/link";
import { usePathname } from "next/navigation";

const NavLinkLabel = ({
  text,
  isActive,
}: {
  text: string;
  isActive: boolean;
}) => {
  const { pending } = useLinkStatus();
  return (
    <span
      className={`px-[1em] transition-colors duration-150 active:duration-0 active:text-secondary group-focus:underline ${
        pending || isActive ? "text-[#0e858f] underline" : ""
      }`}
    >
      {text}
    </span>
  );
};

const NavLink = ({ path, text }: { path: string; text: string }) => {
  const pathname = usePathname();
  const isActive = path === pathname;

  return (
    <Link
      href={path}
      className={`group transition-[transform,text-shadow] duration-150 hover:text-shadow-lg/40 hover:-translate-y-0.5 ${
        isActive ? "text-shadow-lg/30" : ""
      }`}
    >
      <NavLinkLabel text={text} isActive={isActive} />
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
