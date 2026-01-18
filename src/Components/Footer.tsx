import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="flex bg-tertiary p-5 justify-between">
      <div className="text-[1.1em] text-primary tracking-[2px]">
        John Flynn ©
      </div>

      <NavLink
        className="text-[1.1em] text-primary tracking-[2px]"
        to="mailto:hello@john-flynn.co"
      >
        Contact Me
      </NavLink>
    </div>
  );
};
