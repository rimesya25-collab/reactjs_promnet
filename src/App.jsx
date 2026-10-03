import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header2 from "./COMPONENT2/header2";
import Footer2 from "./COMPONENT2/footer2";

import Home2 from "./page/home2";
import About2 from "./page/about2";
import Contact2 from "./page/contact2";

function App() {
  return (
    <BrowserRouter>
      <Header2 />

      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/about" element={<About2 />} />
        <Route path="/contact" element={<Contact2 />} />
      </Routes>

      <Footer2 />
    </BrowserRouter>
  );
}

export default App;