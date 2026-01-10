import { Footer } from "./Footer";
import { Header } from "./Header";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col flex-1 justify-center min-h-screen text-2xl text-center bg-primary">
        <h1>John Flynn</h1>
        <div>
          <em>WEB DEVELOPER SPECIALIZING IN REACT/REACT NATIVE</em>
        </div>
      </div>
      <Footer />
    </div>
  );
};
