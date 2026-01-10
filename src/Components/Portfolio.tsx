import { Footer } from "./Footer";
import { Header } from "./Header";

export const Portfolio = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen bg-primary">
        <div className="title">Portfolio</div>
      </div>
      <Footer />
    </>
  );
};
