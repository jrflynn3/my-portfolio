import { Footer } from "./Footer";
import { Header } from "./Header";

export const About = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-primary ">
        <div className="flex flex-1 items-center justify-center min-h-[400px]">
          <div className="flex-1 p-8 max-w-[400px] max-h-[300px] ">
            <h1>About Me</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="bg-lime-200 h-60 p-5 flex-1 max-w-[300px] max-h-[300px]"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
