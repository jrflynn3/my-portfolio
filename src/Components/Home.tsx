import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import GhostButton from "./GhostButton";
import { Header } from "./Header";

export const Home = () => {
  return (
    <div
      className={`flex flex-col items-center bg-cover bg-[position:70%_bottom]
         md:bg-cover md:bg-top bg-no-repeat min-h-[165vh] bg-[url(Assets/Images/mountains-bg.jpg)] bg-primary`}
    >
      <Header />
      <div className="flex flex-col flex-1 pt-40 md:pt-80 text-center">
        <div>
          <h1 className="text-6xl">John Flynn</h1>
          <div className="pt-3 text-2xl font-thin">
            <em>SOFTWARE DEVELOPER SPECIALIZING IN REACT/REACT NATIVE</em>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-4xl items-center bg-primary rounded-2xl px-15 py-6">
        <div className="flex pb-10">
          I’m a React / React Native developer focused on building clean,
          maintainable mobile experiences. I enjoy collaborating with thoughtful
          teams and solving real-world problems.
        </div>
        <div className="flex">
          <Link to="/About">
            <GhostButton text="Read more" />
          </Link>
        </div>
      </div>
      <div className="pb-50"></div>
      <Footer />
    </div>
  );
};
