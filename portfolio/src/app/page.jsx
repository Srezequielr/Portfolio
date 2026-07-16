"use client";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Navigation from "./components/Navigation";
import Proyects from "./components/Proyects";
import Skills from "./components/Skills";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <div className="mx-5 sm:mx-11 md:mx-14 lg:mx-24 xl:mx-32 ">
      <Navigation />
      <Fade duration={1000}>
        <About />
      </Fade>
      <Fade duration={1000}>
        <Education />
      </Fade>
      <Fade duration={1000}>
        <Proyects />
      </Fade>
      <Fade duration={1000}>
        <Skills />
      </Fade>
      <Fade duration={1000 }>
        <Contact />
      </Fade>
    </div>
  );
}
