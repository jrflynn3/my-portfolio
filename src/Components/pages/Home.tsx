import { Link } from "react-router-dom";
import GhostButton from "../common/GhostButton";

export const Home = () => {
  return (
    <div
      className={`flex flex-col items-center bg-cover bg-[position:70%_bottom]
         md:bg-cover md:bg-top bg-no-repeat min-h-[200vh] sm:min-h-[150vh] bg-[url(Assets/Images/mountains-bg.jpg)] bg-primary`}
    >
      <div className="flex flex-col flex-1 pt-40 md:pt-80 text-center">
        <div>
          <h1 className="text-5xl sm:text-6xl">John Flynn</h1>
          <div className="pt-3 text-2xl font-thin">
            <em>SOFTWARE DEVELOPER SPECIALIZING IN REACT/REACT NATIVE</em>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-4xl items-center bg-primary rounded-2xl px-7 sm:px-15 py-6">
        <div className="flex pb-5 max-w-75 sm:max-w-none text-sm sm:text-base">
          I’m a React / React Native developer focused on building clean,
          maintainable mobile experiences. I enjoy collaborating with thoughtful
          teams and solving real-world problems.
        </div>
        <Link to="/About">
          <GhostButton text="Read more" />
        </Link>
      </div>
      <div className="pb-50"></div>
    </div>
  );
};
