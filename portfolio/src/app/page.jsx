import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Proyects from "./components/Proyects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="mx-5 sm:mx-11 md:mx-14 lg:mx-24 xl:mx-32 ">
      <Navigation />
      <About />
      <Proyects />
      <Skills />
      <Contact />
    </div>
  );
}
