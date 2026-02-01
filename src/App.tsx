import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/pages/Home";
import { About } from "./Components/pages/About";
import { Portfolio } from "./Components/pages/Portfolio";
import Layout from "./Components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="portfolio" element={<Portfolio />}></Route>
        <Route path="about" element={<About />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
