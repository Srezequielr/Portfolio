import Image from "next/image";
import gitHubIcon from "./../../Images/githubBK.png";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Proyect({ data }) {
  return (
    <div className="bg-mainLight dark:bg-secondDark rounded-3xl shadow-lg">
      <Image src={data.img} alt={data.name} className="rounded-t-3xl" />
      <h4 className="m-4 font-bold text-3xl md:text-4xl ">{data.name}</h4>{" "}
      <p className="m-4">{data.description}</p>
      <div className="flex gap-3 mb-4 ml-4 justify-start items-center">
        <Link href={data.gitHub} target="_blank" className="shadow-lg rounded-lg bg-detailColor p-1">
          <Icon
            icon={"line-md:github"}
            className="inline text-4xl md:text-5xl "
          ></Icon>
        </Link>
        <Link href={data.deploy} target="_blank">
          <p className="font-bold text-xl md:text-2xl shadow-lg rounded-lg bg-detailColor text-center p-2 md:p-3">
            Deploy
          </p>
        </Link>
      </div>
    </div>
  );
}
