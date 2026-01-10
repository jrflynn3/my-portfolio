import { NavLink } from "react-router";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <div
      id="page-header"
      className="flex bg-secondary justify-between p-5 sticky transition-[top] duration-300"
    >
      <nav>
        <NavLink to="/">
          <img
            className="flex h-10 w-auto pl-2.5"
            src="./src/Assets/JF-logo-orange-gray.png"
          ></img>
        </NavLink>
      </nav>
      <NavBar />
    </div>
  );
};
