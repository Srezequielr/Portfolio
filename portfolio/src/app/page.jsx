import About from "./components/About";
import Contact from "./components/Contact";
import Proyects from "./components/Proyects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <About />
      <Skills />
      <Proyects />
      <Contact />
    </div>
  );
}
