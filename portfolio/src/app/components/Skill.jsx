import Image from "next/image";

export default function Skill({ data }) {
  return (
    <div className="rounded col-span-1 bg-veriPery p-5">
      <div>
        <h4 className="text-center text-base sm:text-2xl mb-3 h-5">{data.name}</h4>
      </div>
      <div className="flex flex-row m-auto justify-center items-center">
        <Image alt={data.name} className="h-20 w-20 sm:h-24 sm:w-24 object-contain" src={data.img} />
      </div>
    </div>
  );
}
