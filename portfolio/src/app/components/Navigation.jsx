"use client";

import Link from "next/link";
import menuIcon from "./../../Images/menu.png";
import Image from "next/image";
import logo from "../../Images/logo.png"
import { useState } from "react";

export default function Navigation() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuHandler = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <nav className="top-0 left-0 right-0 bg-veriPery fixed">
      <div className="flex flex-row justify-between items-center px-7 sm:px-0 m-auto my-6 max-w-3xl">
        <div>
          <Image src={logo} className="w-20"/>
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
        <div className="fixed bg-veriPery flex flex-col items-center w-full text-center transform transition-transform ease-in-out duration-300 ">
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
