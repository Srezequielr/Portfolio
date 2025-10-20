import UNSJLogoDark from "../../Images/UNSJLogoDark.png";
import UNSJLogoLight from "../../Images/UNSJLogo.png";
import henryLogo from "../../Images/henryLogo.png";
import EducationCard from "./EducationCard";

const educacion = [
  {
    name: "Univ. Nacional de San Juan",
    imgDark: UNSJLogoDark,
    imgLight: UNSJLogoLight,
    carrer: "Tec. Universitaria en Programación Web",
    descrition: "Estudiante avanzado en la carrera de programación web proximo a finalizar. En el transcurso de la carrera estudie y aplique conocimientos en diversos lenguajes de programación, estructuras de datos y algormos, bases de datos. Ademas de trabajar en proyectos grupales e individuales, donde aplique los conocimientos adquiridos.",
    periodo: "2021 - Actualidad",
  },
  {
    name: "Soy Henry",
    imgDark: henryLogo,
    imgLight: henryLogo,
    carrer: "Full Stack Developer",
    descrition: "Bootcamp de 6 meses de duración, donde donde me forme como programador Full Stack. Aprendí a desarrollar aplicaciones web utilizando tecnologías como JavaScript, React, Node.js, Express y bases de datos SQL. Durante el bootcamp, trabajé en proyectos individuales y grupales, lo que me permitió aplicar los conocimientos adquiridos y mejorar mis habilidades de trabajo en equipo.",
    periodo: "2022 - 2023",
  },
  
];

export default function Education() {
  return (
    <article id="education" className="container m-auto scroll-mt-24 my-24">
      <div>
        <h2 className="text-4xl sm:text-6xl dark:text-white font-bold my-5">
          Educación &gt;
        </h2>
        <div className="flex flex-col gap-7">
          {educacion.map((educacion, index) => (
            <EducationCard key={index} data={educacion} />
          ))}
        </div>
      </div>
    </article>
  );
}
