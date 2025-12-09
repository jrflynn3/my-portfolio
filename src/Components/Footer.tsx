import { NavLink } from "react-router";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">John Flynn ©</div>

      <NavLink className="footer-text" to="mailto:hello@john-flynn.co">
        Contact Me
      </NavLink>
    </div>
  );
};
