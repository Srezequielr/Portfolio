import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Proyects from "./components/Proyects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="m-2 sm:m-20 lg:m-32 ">
      <Navigation />
      <About />
      <Skills />
      <Proyects />
      <Contact />
    </div>
  );
}
