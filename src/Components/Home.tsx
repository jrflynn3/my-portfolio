import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import GhostButton from "./GhostButton";
import { Header } from "./Header";

export const Home = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center bg-cover bg-[position:70%_bottom]
         md:bg-contain md:bg-[position:center_65%] bg-no-repeat min-h-[165vh] bg-[url(Assets/Images/website-bg.png)] bg-primary`}
    >
      <Header />
      <div className="flex flex-col flex-1 pt-40 md:pt-60 text-center">
        <div>
          <h1 className="text-6xl">John Flynn</h1>
          <div className="pt-3 text-2xl font-thin">
            <em>SOFTWARE DEVELOPER SPECIALIZING IN REACT/REACT NATIVE</em>
          </div>
        </div>
      </div>
      <div className="mt-auto max-w-2xl mx-auto pb-10">
        I’m a React / React Native developer focused on building clean,
        maintainable mobile experiences. I enjoy collaborating with thoughtful
        teams and solving real-world problems.
      </div>
      <div className="pb-30">
        <Link to="/About">
          <GhostButton text="Read more" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};
