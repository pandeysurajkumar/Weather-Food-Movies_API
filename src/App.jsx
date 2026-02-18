import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Weather from "./pages/Weather";
import Movies from "./pages/Movies";
import Recipies from "./pages/Recipies";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/recipes" element={<Recipies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
