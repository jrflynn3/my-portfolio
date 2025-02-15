import { NavLink } from "react-router";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <div id="page-header" className="header">
      <nav>
        <NavLink to="/">
          <div className="icon">JF</div>
        </NavLink>
      </nav>
      <NavBar />
    </div>
  );
};
