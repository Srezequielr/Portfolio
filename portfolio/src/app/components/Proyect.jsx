import Image from "next/image";
import gitHubIcon from "./../../Images/githubBK.png";
import Link from "next/link";

export default function Proyect({ data }) {
  return (
    <div className="bg-slate-500 rounded">
      <Image src={data.img} alt={data.name} className="rounded-t" />
      <h4 className="m-4 font-bold text-2xl">{data.name}</h4>{" "}
      <p>{data.description}</p>
      <div className="grid grid-cols-2 w-1/3 mb-4 ml-4 justify-center items-center">
        <Link href={data.gitHub} target="_blank">
          <Image src={gitHubIcon} alt="GitHub Icon" className="w-10" />
        </Link>
        <Link href={data.deploy} target="_blank">
          <p className="font-bold hover:bg-slate-400 rounded-sm transition text-center p-2">Deploy</p>
        </Link>
      </div>
    </div>
  );
}
