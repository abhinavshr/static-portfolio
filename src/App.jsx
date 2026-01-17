import React from "react";
import Navigation from "./components/Navigation.jsx";
import { Hero } from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Education from "./components/Education.jsx";
import { Skills } from "./components/Skills.jsx";

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <AboutMe />
      <Education />
      <Skills />
    </div>
  );
};

export default App;
