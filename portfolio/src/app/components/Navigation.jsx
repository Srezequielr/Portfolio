import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="container mb-6 m-auto p-5 fixed">
      <div className="grid grid-cols-2 m-6">
        <div>
          <p>Mi logo</p>
        </div>
        <div className="grid grid-cols-4">
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
      </div>
    </nav>
  );
}
