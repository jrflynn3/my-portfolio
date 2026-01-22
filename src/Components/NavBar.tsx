import { NavLink } from "react-router-dom";

const Link = ({ path, text }: { path: string; text: string }) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      `px-[1em] transition-all delay-100 hover:font-black hover:text-shadow-lg/30 focus:underline focus:font-black${
        isActive ? " font-black underline" : ""
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
      <Link path="/contact" text="Contact" />
      <Link path="/about" text="About" />
    </nav>
  );
};
