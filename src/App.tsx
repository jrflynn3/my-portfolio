import { Routes, Route } from "react-router-dom";
import { About, Home, Portfolio } from "./Components/pages";
import { Layout } from "./Components/layout/";

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
