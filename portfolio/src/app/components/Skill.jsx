import { Icon } from "@iconify/react";

export default function Skill({ data }) {
  return (
    <div className="rounded-3xl shadow-inner bg-mainLight dark:bg-secondDark py-3 lg:p-5">
      <div>
        <h4 className="text-center sm:text-2xl mb-4 lg:mb-6 h-5 font-bold overflow-visible text-white dark:text-black">
          {data.name}
        </h4>
      </div>
      <div className="flex flex-row m-auto justify-center items-center ">
        <Icon icon={data.code} className="text-7xl sm:text-9xl text-white dark:text-black"></Icon>
      </div>
    </div>
  );
}
