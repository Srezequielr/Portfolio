import Skill from "./Skill";
import cssIcon from "./../../Images/cssBK.png";
import figmaIcon from "./../../Images/figmaBK.png";
import HTMLBKIcon from "./../../Images/HTMLBK.png";
import insomniaIcon from "./../../Images/insomniaBK.png";
import javascriptIcon from "./../../Images/javascriptBK.png";
import materialUIIcon from "./../../Images/material-uiBK.png";
import reactIcon from "./../../Images/reactBK.png";
import reduxIcon from "./../../Images/reduxBK.png";
import expressIcon from "./../../Images/expressjsBK.png";
import gitHunIcon from "./../../Images/githubBK.png";
import slackIcon from "./../../Images/slackBK.png";
import trelloIcon from "./../../Images/trelloBK.png";
import vsCodeIcon from "./../../Images/visual-studio-codeBK.png";
import adobeIcon from "./../../Images/adobe-illustratorBK.png";
import tailwindIcon from "./../../Images/tailwind_CSSBK.png";
import nextIcon from "./../../Images/next-jsBK.png"

const languajes = [
  { name: "HTML", img: HTMLBKIcon },
  { name: "JavaScript", img: javascriptIcon },
  { name: "CSS", img: cssIcon },
];

const technologies = [
  { name: "React", img: reactIcon },
  { name: "NextJS", img: nextIcon },
  { name: "Redux", img: reduxIcon },
  { name: "Material UI", img: materialUIIcon },
  { name: "Tailwind", img: tailwindIcon },
  { name: "Express", img: expressIcon },
];

const tools = [
  { name: "GitHub", img: gitHunIcon },
  { name: "Ilustrator", img: adobeIcon },
  { name: "Trello", img: trelloIcon },
  { name: "Figma", img: figmaIcon },
  { name: "Insomnia", img: insomniaIcon },
  { name: "Slack", img: slackIcon },
  { name: "VS Code", img: vsCodeIcon },
];

export default function Skills() {
  return (
    <article
      id="techSkills"
      className="container m-auto px-8 scroll-mt-24 my-24"
    >
      <div>
        <h2 className="text-4xl font-bold">Tech Skills</h2>
        <br />
        <h3 className="text-2xl font-bold pb-6">Lenguages</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {languajes.map((languaje, index) => (
            <Skill key={index} data={languaje} />
          ))}
        </div>
        <br />
        <h3 className="text-2xl font-bold pb-6">Tecnologias</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {technologies.map((technologie, index) => (
            <Skill key={index} data={technologie} />
          ))}
        </div>
        <br />
        <h3 className="text-2xl font-bold pb-6">Herramientas de trabajo</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {tools.map((tool, index) => (
            <Skill key={index} data={tool} />
          ))}
        </div>
      </div>
    </article>
  );
}
