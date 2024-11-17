import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Foods from "./components/Foods";
import Categories from "./components/Categories";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Foods />
      <AboutUs />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
