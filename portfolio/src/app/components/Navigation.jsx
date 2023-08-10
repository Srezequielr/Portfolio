"use client";

import Link from "next/link";
import menuIcon from "./../../Images/menu.png";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuHandler = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <nav className="top-0 left-0 right-0 bg-slate-600 fixed">
      <div className="flex flex-row justify-between items-center px-7 sm:px-0 m-auto my-6 max-w-3xl">
        <div>
          <p>Mi logo</p>
        </div>
        <div className="hidden sm:grid sm:grid-cols-4 gap-9">
          <p>
            <Link href={"#about"}>Sobre mi</Link>
          </p>
          <p>
            <Link href={"#techSkills"}>Tech Skills</Link>
          </p>
          <p>
            <Link href={"#proyects"}>Proyectos</Link>
          </p>
          <p>
            <Link href={"#contact"}>Contacto</Link>
          </p>
        </div>
        <div className="sm:hidden flex object-center">
          <button onClick={menuHandler}>
            <Image src={menuIcon} alt="Menu icon" className="w-5" />
          </button>
        </div>
      </div>
      {menuIsOpen && (
        <div className="fixed bg-slate-600 flex flex-col items-center w-full text-center transform transition-transform ease-in-out duration-300 ">
          <ul className="grid grid-rows-4 gap-3 my-2">
            <li>
              <Link onClick={menuHandler} href={"#about"}>
                Sobre mi
              </Link>
            </li>
            <li>
              <Link onClick={menuHandler} href={"#techSkills"}>
                Tech Skills
              </Link>
            </li>
            <li>
              <Link onClick={menuHandler} href={"#proyects"}>
                Proyectos
              </Link>
            </li>
            <li>
              <Link onClick={menuHandler} href={"#contact"}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
