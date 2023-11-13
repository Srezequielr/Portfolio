import Image from "next/image";

export default function Skill({ data }) {
  return (
    <div className="rounded bg-veriPery shadow-lg p-5">
      <div>
        <h4 className="text-center sm:text-2xl mb-6 h-5 font-bold overflow-visible">{data.name}</h4>
      </div>
      <div className="flex flex-row m-auto justify-center items-center">
        <Image alt={data.name} className="h-20 w-20 sm:h-24 sm:w-24 object-contain" src={data.img} />
      </div>
    </div>
  );
}
