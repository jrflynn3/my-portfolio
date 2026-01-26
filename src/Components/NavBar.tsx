import { NavLink } from "react-router-dom";

const Link = ({ path, text }: { path: string; text: string }) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      `px-[1em] transition-all delay-75 hover:text-shadow-lg/40 focus:underline focus:text-secondary hover:-translate-y-0.5 ${
        isActive ? "text-[#0C8A91] font-black text-shadow-lg/30 underline" : ""
      }`
    }
  >
    {text}
  </NavLink>
);

export const NavBar = ({ vertical }: { vertical: boolean }) => {
  const verticalStyles = "flex flex-col text-[1.50em] gap-5 text-primary";
  const horizontalStyles =
    "flex justify-between text-primary tracking-[2px] text-[1.2em] text-center m-auto";
  return (
    <nav className={vertical ? verticalStyles : horizontalStyles}>
      <Link path="/portfolio" text="Portfolio" />
      <Link path="/about" text="About" />
      <a
        className="px-[1em] transition-all delay-75 hover:text-shadow-lg/40 hover:-translate-y-0.5 active:text-[#0C8A91]"
        href="mailto:hello@john-flynn.co"
      >
        Email
      </a>
    </nav>
  );
};
