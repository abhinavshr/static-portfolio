import React from "react";
import Navigation from "./components/Navigation.jsx";
import { Hero } from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Education from "./components/Education.jsx";
import { Skills } from "./components/Skills.jsx";
import { CareerObjective } from "./components/CareerObjective.jsx";

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <AboutMe />
      <Education />
      <Skills />
      <CareerObjective />
    </div>
  );
};

export default App;
