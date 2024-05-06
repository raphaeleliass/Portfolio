import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import "./index.css";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Header />
    <Hero />
    <Skills />
    <Projects />
    <Contact />
  </div>,
);
