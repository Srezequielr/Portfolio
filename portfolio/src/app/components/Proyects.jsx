import promanitasPh from "./../../Images/promanitas.png";
import comidaPh from "./../../Images/comida+.png";
import SCHPh from "./../../Images/SCH.png";
import pokeAppPh from "./../../Images/pokeApp.png";
import Proyect from "./Proyect";

const proyects = [
  {
    name: "Sistemas de Control Horario",
    img: SCHPh,
    deploy: null,
    gitHub: null,
    stack: [
      "JavaScript",
      "Supabase",
      "Github",
      "Nextjs",
      "NodeJS",
      "HTML",
      "Tailwind",
      "Figma",
      "Trello",
    ],
    description: "Aplicacion desarrollada para la getion de horarios de una organizacion, resolviendo el problema de registros de horarios y sueldo de empleados. La aplicación permite a los empleados registrar sus horas de entrada y salida, capturando la ubicación exacta mediante geolocalización para validar el fichaje. Basado en las horas trabajadas y el sueldo configurado, el sistema calcula automáticamente el saldo total a cobrar. El objetivo principal de esta aplicación es optimizar la gestión de horarios y pagos, proporcionando una solución eficiente y precisa para las organizaciones y sus empleados, siendo esta facil de utilizar para los empleados y administradores.",
  },
  {
    name: "Comida +",
    img: comidaPh,
    deploy: "https://pi-food-main-gt2pubtvb-srezequielr.vercel.app/",
    gitHub: "https://github.com/Srezequielr/PI-Food-main",
    stack: [
      "JavaScript",
      "React",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "HTML",
      "Redux",
    ],
    description: "Desarrollé una SPA (Single Page Application) como proyecto final para Henry. La aplicación consume intensivamente una API externa para buscar, filtrar y mostrar recetas, y permite a los usuarios crear y almacenar sus propias recetas en una base de datos PostgreSQL propia. Implementé un backend robusto con Node.js y Express para gestionar toda la lógica de negocio y la API REST. El frontend se construyó con React y Redux para un manejo de estado eficiente, permitiendo a los usuarios filtrar, ordenar y crear recetas de forma dinámica.",
  },
  {
    name: "PokeApp",
    img: pokeAppPh,
    deploy: "https://pi-pokemon-main-pi.vercel.app/",
    gitHub: "https://github.com/Srezequielr/PI-Pokemon-main",
    stack: [
      "JavaScript",
      "React",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "HTML",
      "Redux",
      "Material UI",
    ],
    description: "esarrollé una SPA de recetas 100% responsive, enfocada en una experiencia de usuario limpia y adaptativa. La aplicación consume una API externa para buscar y filtrar recetas, y permite a los usuarios crear y guardar las suyas propias en una base de datos PostgreSQL. El backend se construyó con Node.js y Express. Para el frontend, utilicé React y Redux para el manejo de estado, implementando todo el diseño con Material UI para asegurar que la interfaz sea funcional y elegante en cualquier dispositivo, desde móviles hasta computadoras de escritorio.",
  },
];

export default function Proyects() {
  return (
    <article id="proyects" className="container m-auto scroll-mt-24 ">
      <div>
        <h2 className="text-4xl sm:text-6xl dark:text-white font-bold my-5">
          Projects &gt;
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-7">
          {proyects.map((proyect, index) => (
            <Proyect key={index} data={proyect} />
          ))}
        </div>
      </div>
    </article>
  );
}
