import { Footer } from "./Footer";
import { Header } from "./Header";

export const Home = () => {
  return (
    // how do I structure the page?
    // Seems different than how a standard html page would look?
    <div className="wrapper">
      {/* maybe just move this into the menu bar and have either no text in the middle or some smaller description */}

      <Header />
      <div className="main">
        <div className="title">
          {/* <img src="./src/Assets/image-from-rawpixel-id-3864432-jpeg.jpg"/> */}
          <h1>John Flynn</h1>
          <h2>Web Developer specializing in React/React Native</h2>
        </div>
      </div>

      <Footer />
    </div>
  );
};
