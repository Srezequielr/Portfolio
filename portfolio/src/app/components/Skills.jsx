import Skill from "./Skill";


const languajes = [
  { name: "HTML", code: "nonicons:html-16" },
  { name: "JavaScript", code: "fluent:code-js-16-filled" },
  { name: "CSS", code: "nonicons:css-16" },
  {name: "C", code: "mdi:language-c"}
];

const technologies = [
  { name: "React", code: "mdi:react" },
  { name: "NextJS", code: "tabler:brand-nextjs" },
  { name: "Redux", code: "file-icons:redux" },
  { name: "Material UI", code: "mdi:material-ui" },
  { name: "Tailwind", code: "teenyicons:tailwind-outline" },
  { name: "Express", code: "simple-icons:express" },
];

const tools = [
  { name: "GitHub", code: "line-md:github" },
  { name: "Ilustrator", code: "hugeicons:adobe-illustrator" },
  { name: "Trello", code: "hugeicons:trello" },
  { name: "Figma", code: "solar:figma-outline" },
  { name: "Insomnia", code: "devicon-plain:insomnia" },
  { name: "Slack", code: "mdi:slack" },
  { name: "VS Code", code: "proicons:visual-studio-code" },
];

export default function Skills() {
  return (
    <article
      id="techSkills"
      className="container m-auto scroll-mt-24 my-24"
    >
      <div>
        <h2 className="text-4xl sm:text-6xl dark:text-white font-bold my-5">Habilidades &gt;</h2>
        <br />
        <h3 className="text-3xl dark:text-white font-bold pb-6">Lenguages</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
          {languajes.map((languaje, index) => (
            <Skill key={index} data={languaje} />
          ))}
        </div>
        <br />
        <h3 className="text-3xl dark:text-white font-bold pb-6">Tecnologias</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
          {technologies.map((technologie, index) => (
            <Skill key={index} data={technologie} />
          ))}
        </div>
        <br />
        <h3 className="text-3xl dark:text-white font-bold pb-6">Herramientas de trabajo</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
          {tools.map((tool, index) => (
            <Skill key={index} data={tool} />
          ))}
        </div>
      </div>
    </article>
  );
}
