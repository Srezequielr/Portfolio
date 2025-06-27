"use client";

import Link from "next/link";
import menuIcon from "./../../Images/menu.png";
import Image from "next/image";
import logo from "../../Images/logo.png";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Fade } from "react-awesome-reveal";

export default function Navigation() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuHandler = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  console.log("<3 If you see this, hire me <3");
  return (
    <nav className="top-0 left-0 right-0 bg-mainLight dark:bg-secondDark fixed z-10">
      <div className="flex flex-row m-auto justify-between items-center px-7 sm:px-10 my-6 max-w-5xl">
        <div>
          <Image alt="Isotipo" src={logo} className="w-14 md:w-20" />
        </div>
        <div className="hidden lg:grid sm:grid-cols-6 gap-5">
          <p className="text-center text-white dark:text-black">
            <Link className="font-bold" href={"#about"}>
              Sobre mí
            </Link>
          </p>
          <p className="text-center text-white dark:text-black">
            <Link className="font-bold" href={"#education"}>
              Educación
            </Link>
          </p>
          <p className="text-center text-white dark:text-black">
            <Link className="font-bold" href={"#proyects"}>
              Proyectos
            </Link>
          </p>
          <p className="text-center text-white dark:text-black">
            <Link className="font-bold" href={"#techSkills"}>
              Habilidades
            </Link>
          </p>
          <p className="text-center text-white dark:text-black">
            <Link className="font-bold" href={"#contact"}>
              Contacto
            </Link>
          </p>
          <p className="text-center">
            <a
              className="font-bold text-white dark:text-black"
              href="/Full-Stack-Julian-Riera-CV.pdf"
              download
            >
              Descargar CV
            </a>
          </p>
        </div>
        <div className="lg:hidden flex object-center">
          <button onClick={menuHandler}>
            <Image src={menuIcon} alt="Menu icon" className="w-5" />
          </button>
        </div>
      </div>
      {menuIsOpen && (
        <div className="fixed bg-mainLight dark:bg-secondDark flex flex-col items-center w-full text-center transform transition-transform ease-in-out duration-300 ">
          <ul className="grid grid-rows-4 gap-3 my-2">
            <li className="my-2">
              <Link onClick={menuHandler} href={"#about"} className="font-bold ">
                Sobre mi
              </Link>
            </li>
            <li className="my-2">
              <Link onClick={menuHandler} href={"#education"} className="font-bold">
                Educación
              </Link>
            </li>
            <li className="my-2">
              <Link onClick={menuHandler} href={"#proyects"} className="font-bold">
                Proyectos
              </Link>
            </li>
            <li className="my-2">
              <Link onClick={menuHandler} href={"#techSkills"} className="font-bold">
                Habilidades
              </Link>
            </li>
            <li className="my-2">
              <Link onClick={menuHandler} href={"#contact"} className="font-bold">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
      <Fade duration={600}>
        <a href="/Full-Stack-Julian-Riera-CV.pdf" download>
          <div className="fixed flex items-center justify-center right-0 top-3/4 rounded-l-xl sm:hidden p-2 bg-mainLight dark:bg-secondDark ">
            <Icon icon={"tabler:download"} className="inline text-xl"></Icon>
            <p className="text-lg font-bold mx-1">CV</p>
          </div>
        </a>
      </Fade>
    </nav>
  );
}
