import { NavLink } from "react-router";

export const NavBar = () => {
  return (
    <nav className="header-links header-text">
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};
