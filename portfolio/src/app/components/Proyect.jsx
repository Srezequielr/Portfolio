import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { skillsData } from "../skills";

export default function Proyect({ data }) {
  console.log(data);

  return (
    <div className="bg-mainLight dark:bg-secondDark rounded-3xl shadow-lg">
      <Image src={data.img} alt={data.name} className="rounded-t-3xl " />
      <h4 className="m-4 font-bold text-2xl md:text-3xl text-white dark:text-black ">
        {data.name}
      </h4>{" "}
      <p className="m-4">{data.description}</p>
      <div className="m-4 flex flex-wrap gap-3">
        {data.stack.map((tech, index) => (
          <div
            title={tech}
            key={index}
            className=" bg-detailColor text-white dark:text-black rounded-lg p-2 text-sm font-semibold"
          >
            <Icon className="text-4xl" icon={skillsData[tech]} />
          </div>
        ))}
      </div>
      <div className="flex gap-3 mb-4 ml-4 justify-start items-center">
        {data.gitHub ? (
          <Link
            href={data.gitHub}
            target="_blank"
            className="shadow-2xl rounded-lg bg-detailColor p-1 hover:shadow-none transition"
          >
            <Icon
              icon={"line-md:github"}
              className="inline text-4xl md:text-5xl "
            ></Icon>
          </Link>
        ) : null}
        {data.deploy ? (
          <Link href={data.deploy} target="_blank">
            <p className="font-bold text-xl md:text-2xl shadow-2xl rounded-lg bg-detailColor text-center p-2 md:p-3 hover:shadow-none transition">
              Deploy
            </p>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
