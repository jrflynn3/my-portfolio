import { NavLink } from "react-router";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <div id="page-header" className="header">
      <nav>
        <NavLink to="/">
          <img className="icon" src="./src/Assets/JF-logo-orange-gray.png"></img>
        </NavLink>
      </nav>
      <NavBar />
    </div>
  );
};
