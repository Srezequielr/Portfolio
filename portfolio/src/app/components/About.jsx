"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function About() {
  const words = ["Full Stack", "Front End", "Back End"];
  const [currentText, setCurrentText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[currentWordIndex];
    let typingTimeout;

    const handleTyping = () => {
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        setTypingSpeed(50);
      } else {
        setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && currentText === currentWord) {
        typingTimeout = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        typingTimeout = setTimeout(handleTyping, typingSpeed);
      }
    };

    typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed]);

  return (
    <article
      id="about"
      className="
        relative min-h-screen flex flex-col pt-32 scroll-mt-24 overflow-x-hidden
        -mx-5 sm:-mx-11 md:-mx-14 lg:-mx-24 xl:-mx-32 
        px-5 sm:px-11 md:px-14 lg:px-24 xl:px-32
      "
    >
      {/* 
        IMAGEN DE FONDO
        Al romper los márgenes del padre, el 'right-0' ahora pega la imagen
        al borde físico de tu monitor. El overflow-x-hidden del article 
        corta el sobrante de forma limpia sin crear un doble scroll.
      */}
      <img 
        src="/Code_Generated_Image (2).png" 
        alt="Avatar de Julian" 
        className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-[40%] w-[500px] md:w-[750px] lg:w-[900px] max-w-none -z-10 pointer-events-none opacity-20 md:opacity-100"
      />

      <h1 className="text-4xl md:text-6xl mb-1 font-bold dark:text-white relative z-10">
        Hola! <br />
        Soy Julian!
      </h1>
      <h2 className="text-3xl md:text-5xl dark:text-white relative z-10">
        <span className="font-bold text-detailColor">{currentText}<span className="animate-pulse">_</span> </span>{" "}
          Developer
      </h2>
      <div className="my-3 sm:my-6 relative z-10">
        <Link target="_blank" href={"https://github.com/Srezequielr"}>
          <Icon
            icon={"line-md:github"}
            className="inline dark:text-white text-4xl sm:text-6xl"
          ></Icon>
        </Link>
        <Link target="_blank" href={"https://www.linkedin.com/in/julianriera/"}>
          <Icon
            icon={"line-md:linkedin"}
            className="inline dark:text-white text-4xl sm:text-6xl"
          ></Icon>
        </Link>
      </div>
      <p className=" text-lg md:text-3xl dark:text-white mb-4 md:w-10/12 relative z-10">
          Soy programador egresado de Henry y actualmente estudiante en la Universidad Nacional de San Juan. Cuento con experiencia en diversos lenguajes y tecnologías que me permiten crear soluciones funcionales y bien diseñadas. Me apasiona el desarrollo web y disfruto enfrentarme a nuevos retos que me impulsen a seguir aprendiendo y creciendo profesionalmente.
      </p>
      
      <Link className="block m-auto mt-auto pb-10 relative z-10" href={"#education"}>
        <Icon
          icon={"teenyicons:down-solid"}
          className="m-auto dark:text-white text-5xl sm:text-7xl animate-bounce"
        ></Icon>
      </Link>
    </article>
  );
}