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
      className="container m-auto scroll-mt-24 pt-32 h-screen min-h-max flex flex-col"
    >
      <h1 className="text-4xl md:text-6xl mb-1 font-bold dark:text-white">
        Hola! <br />
        Soy Julian!
      </h1>
      <h2 className="text-3xl md:text-5xl dark:text-white">
        <span className="font-bold">{currentText}<span className="animate-pulse">_</span> </span>{" "}
         Developer
      </h2>
      <div className="my-3 sm:my-6">
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
      <p className=" text-lg md:text-3xl dark:text-white mb-4 md:w-10/12">
          Soy programador egresado de Henry y actualmente estudiante en la Universidad Nacional de San Juan. Cuento con experiencia en diversos lenguajes y tecnologías que me permiten crear soluciones funcionales y bien diseñadas. Me apasiona el desarrollo web y disfruto enfrentarme a nuevos retos que me impulsen a seguir aprendiendo y creciendo profesionalmente.
      </p>
      <Link className="block m-auto" href={"#proyects"}>
        <Icon
          icon={"teenyicons:down-solid"}
          className="m-auto dark:text-white text-5xl sm:text-7xl"
        ></Icon>
      </Link>
    </article>
  );
}
