import { NavLink } from "react-router-dom";
import { NavBar } from "./NavBar";
import logo from "../Assets/Images/JF-logo-orange-gray.png";
import { useState } from "react";

const HomeIcon = () => (
  <NavLink to="/">
    <img className="h-10 w-auto pl-2.5" src={logo} alt="Home"></img>
  </NavLink>
);

const MenuButton = ({
  onClick: handleOnClick,
  expanded,
}: {
  onClick: () => void;
  expanded: boolean;
}) => {
  return (
    <button
      className="self-start bg-quaternary p-1 rounded-md"
      type="button"
      aria-label="Toggle menu"
      aria-controls="mobile-menu"
      aria-expanded={expanded}
      onClick={handleOnClick}
    >
      <svg
        className="h-10 text-primary hover:text-black shadow"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M2 7a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const setMenuState = () => {
    setMenuOpen((val) => !val);
  };

  return (
    <div
      id="page-header"
      className="flex w-full bg-secondary sticky transition-[top] duration-300 shadow-md/50"
    >
      <nav className="md:flex hidden flex-1 justify-between p-5 items-center">
        <HomeIcon />
        <NavBar vertical={false} />
      </nav>

      <nav className="md:hidden flex flex-1 p-5">
        {menuOpen ? (
          <div className="flex flex-1 justify-between">
            <NavBar vertical={true} />
            <MenuButton onClick={setMenuState} expanded={menuOpen} />
          </div>
        ) : (
          <div className="flex flex-1 justify-between">
            <HomeIcon />
            <MenuButton onClick={setMenuState} expanded={menuOpen} />
          </div>
        )}
      </nav>
    </div>
  );
};
