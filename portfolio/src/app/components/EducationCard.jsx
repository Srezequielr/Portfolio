import Image from "next/image";

export default function EducationCard({ data }) {
  return (
    <div className="container flex flex-row gap-7 items-stretch">
      <div className=" bg-mainLight dark:bg-secondDark rounded-3xl p-4">
        <Image 
          alt={data.name} 
          src={data.imgDark} 
          width={300} 
          height={300} 
          className="object-cover rounded-2xl hidden dark:block"/>
        <Image 
          alt={data.name} 
          src={data.imgLight} 
          width={300} 
          height={300} 
          className="object-cover rounded-2xl block dark:hidden"/>
      </div>
      <div className="w-full rounded-3xl flex flex-col bg-mainLight dark:bg-secondDark">
        <h4 className="m-4 font-bold text-3xl md:text-4xl text-white dark:text-black">
          {data.name}
        </h4>
        <p className="font-bold mx-4 text-2xl text-white dark:text-black">{data.carrer}</p>
        <p className="m-4 text-white dark:text-black">{data.descrition}</p>
        <p className="font-bold m-4 text-white dark:text-black">{data.periodo}</p>
      </div>
    </div>
  );
}
