import Image from "next/image";

export default function EducationCard({ data }) {
  return (
    <div className="bg-mainLight dark:bg-secondDark rounded-3xl shadow-lg">
      <Image
        src={data.imgDark}
        alt={data.name}
        className="h-60 object-contain rounded-t-3xl hidden dark:block"
      />
      <Image
        src={data.imgLight}
        alt={data.name}
        className="h-60 object-contain rounded-t-3xl block dark:hidden "
      />
      <h4 className="m-4 font-bold text-3xl md:text-4xl text-white dark:text-black">
        {data.name}
      </h4>
      <p className="m-4">{data.carrer}</p>
      <p className="m-4">{data.descrition}</p>
      <p className="m-4">{data.periodo}</p>
    </div>
  );
}