import Image from "next/image";

export default function EducationCard({ data }) {
  return (
    <div className="container flex flex-col gap-4 md:gap-7 ">
      <div className="flex flex-row gap-4 md:gap-7 items-stretch">
        <div className="flex justify-center relative w-32 h-32 md:w-64 md:h-auto bg-mainLight dark:bg-secondDark rounded-3xl p-4">
          <Image
            alt={data.name}
            src={data.imgDark}
            fill
            className="object-contain rounded-2xl hidden dark:block"
          />
          <Image
            alt={data.name}
            src={data.imgLight}
            fill
            className="object-contain rounded-2xl block dark:hidden"
          />
        </div>
        <div className="w-full rounded-3xl flex flex-col justify-around bg-mainLight dark:bg-secondDark p-1">
          <h4 className="mx-4 md:my-4 font-bold text-lg md:text-4xl text-white dark:text-black">
            {data.name}
          </h4>
          <p className="font-bold mx-4 md:my-2text-sm md:text-2xl text-white dark:text-black">
            {data.carrer}
          </p>
          <p className="hidden mx-4 md:my-2 text-white dark:text-black md:block">
            {data.descrition}
          </p>
          <p className="md:font-bold mx-4 md:my-2 text-white dark:text-black">
            {data.periodo}
          </p>
        </div>
      </div>
        <div className="md:hidden bg-mainLight dark:bg-secondDark rounded-3xl">
          <p className="m-4 text-white dark:text-black p-2">
            {data.descrition}
          </p>
        </div>
    </div>
  );
}
