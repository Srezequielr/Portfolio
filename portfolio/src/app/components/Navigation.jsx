import Link from "next/link";
import menuIcon from "./../../Images/menu.png";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="top-0 left-0 right-0 opacity-90 bg-slate-600 fixed">
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
          <button>
            <Image src={menuIcon} alt="Menu icon" className="w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
