import { useState } from "react";
import Navbar from "./components/common/Navbar";
import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Skills from "./components/section/Skills";
import Projects from "./components/section/Projects";
import Experience from "./components/section/Experience";
import Certifications from "./components/section/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/common/Footer";
import ProjectCard from "./components/cards/ProjectCard";
import Fadeln from "./components/animation/Fadeln";
import ScaleHover from "./components/animation/ScaleHover";
import Slideln from "./components/animation/Slideln";

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
