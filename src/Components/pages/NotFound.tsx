import { Link } from "react-router-dom";
import { GhostButton } from "../common";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-center px-4">
      <h1 className="text-6xl font-bold pb-4">404</h1>
      <p className="text-xl font-thin pb-8">Page not found</p>
      <Link to="/">
        <GhostButton text="Go home" />
      </Link>
    </div>
  );
};
