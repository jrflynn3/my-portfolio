import { Footer } from "./Footer";
import { Header } from "./Header";

export const Home = () => {
  return (
    <div
      className={`flex flex-col bg-cover bg-[position:70%_bottom]
         md:bg-contain md:bg-bottom bg-no-repeat min-h-[150vh] bg-[url(Assets/Images/website-bg.png)] bg-primary`}
    >
      <Header />
      <div className="flex flex-col flex-1 pt-40 md:pt-60 text-center">
        <div>
          <h1 className="text-6xl">John Flynn</h1>
          <div className="pt-3 text-2xl font-thin">
            <em>WEB DEVELOPER SPECIALIZING IN REACT/REACT NATIVE</em>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
