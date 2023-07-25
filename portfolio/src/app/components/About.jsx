import Image from "next/image";
import profile from "../../Images/Profile.jpg";

export default function About() {
  return (
    <article>
      <Image className="rounded-full" src={profile} />
      <h1 className="text-center">Julian Ezequiel Riera</h1>
      <h2>Full Stack - Front End - Back End Developer</h2>
      <h3>¡Hola Mundo!</h3>
      <p>
        Si tengo que definir mi perfil profesional, seria perfeccionista. <br />
        Tengo un amplio abanico de tecnologias y conocimientos adquiridos como
        asi una inclinacion hacia el Front End. <br />
        Soy un desarrollador proactivo, con predispocision al cambio y a la
        adaptacion.
      </p>
    </article>
  );
}
