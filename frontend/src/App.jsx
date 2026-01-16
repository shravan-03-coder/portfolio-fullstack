import { useState } from "react";
import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Certifications from "./components/sections/Certifications";
import Footer from "./components/common/Footer";
import ProjectCard from "./components/cards/ProjectCard";
import FadeIn from "./components/animations/FadeIn";
import ScaleHover from "./components/animations/ScaleHover";
import SlideIn from "./components/animations/SlideIn";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-950 text-black dark:text-white transition">
        <Navbar dark={dark} setDark={setDark} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
