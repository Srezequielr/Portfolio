import promanitasPh from "./../../Images/promanitas.png";
import comidaPh from "./../../Images/comida+.png";
import pokeAppPh from "./../../Images/pokeApp.png";
import Proyect from "./Proyect";

const proyects = [
  {
    name: "Promanitas",
    img: promanitasPh,
    deploy: "https://pro-manitas-client.vercel.app/",
    gitHub: "https://github.com/ProManitas",
  },
  {
    name: "Comida +",
    img: comidaPh,
    deploy: "https://pi-food-main-gt2pubtvb-srezequielr.vercel.app/",
    gitHub: "https://github.com/Srezequielr/PI-Food-main",
  },
  {
    name: "PokeApp",
    img: pokeAppPh,
    deploy: "https://pi-pokemon-main-pi.vercel.app/",
    gitHub: "https://github.com/Srezequielr/PI-Pokemon-main",
  },
];

export default function Proyects() {
  return (
    <article id="proyects" className="container m-auto px-8 scroll-mt-24 my-24 md:mb-24">
      <div>
        <h2 className="text-4xl font-bold my-5">Projects</h2>
        <div className="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3 md:gap-12">
          {proyects.map((proyect, index) => (
            <Proyect key={index} data={proyect} />
          ))}
        </div>
      </div>
    </article>
  );
}
