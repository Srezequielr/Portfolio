import Image from "next/image";
import profile from "../../Images/Profile.jpg";

export default function About() {
  return (
    <article className="container m-auto">
      <div className="grid grid-cols-2 grid-rows-4 my-12">
        <div className="col-span-1 row-span-4 px-6 flex flex-col justify-center">
          <h1 className="text-6xl mb-5 font-bold">Julian Ezequiel Riera</h1>
          <h2 className="text-3xl mb-4">
            Full Stack - Front End - Back End Developer
          </h2>
          <h3 className="text-2xl mb-4">¡Hola Mundo!</h3>
          <p className="text-xl mb-4">
            Si tengo que definir mi perfil profesional, seria perfeccionista.{" "}
            <br />
            Tengo un amplio abanico de tecnologias y conocimientos adquiridos
            como asi una inclinacion hacia el Front End. <br />
            Soy un desarrollador proactivo, con predispocision al cambio y a la
            adaptacion.
          </p>
        </div>
        <Image className="rounded-full col-span-1 row-span-4 shadow-sm" src={profile} />
      </div>
    </article>
  );
}
