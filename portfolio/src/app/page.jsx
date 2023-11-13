import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Proyects from "./components/Proyects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="m-auto sm:mx-5 md:mx-10 lg:mx-24 xl:mx-32 ">
      <Navigation />
      <About />
      <Skills />
      <Proyects />
      <Contact />
    </div>
  );
}
