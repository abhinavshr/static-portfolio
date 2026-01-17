import React from "react";
import Navigation from "./components/Navigation.jsx";
import { Hero } from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Education from "./components/Education.jsx";

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <AboutMe />
      <Education />
    </div>
  );
};

export default App;
