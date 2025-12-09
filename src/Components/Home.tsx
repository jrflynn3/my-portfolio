import { Footer } from "./Footer";
import { Header } from "./Header";

export const Home = () => {
  return (

    <div className="wrapper">
      <Header />
      <div className="main">
        <div className="main-title">
          <h1>John Flynn</h1>
          <div><em>WEB DEVELOPER SPECIALIZING IN  REACT/REACT NATIVE</em></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
