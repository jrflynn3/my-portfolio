import { NavLink } from "react-router";
import { NavBar } from "./NavBar";
import logo from "../Assets/Other/JF-logo-orange-gray.png";

export const Header = () => {
  return (
    <div
      id="page-header"
      className="flex bg-secondary justify-between p-5 sticky transition-[top] duration-300 shadow-lg/15"
    >
      <nav>
        <NavLink to="/">
          <img className="flex h-10 w-auto pl-2.5" src={logo}></img>
        </NavLink>
      </nav>
      <NavBar />
    </div>
  );
};
