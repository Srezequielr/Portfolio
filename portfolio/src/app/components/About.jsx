"use client";

import Image from "next/image";
import profile from "../../Images/Profile.jpg";
import gitHub from "../../Images/githubBK.png";
import linkedIn from "../../Images/linkedInBK.png";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function About() {
  const phrases = ["Full Stack", "Front End", "Back End"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [showNextPhrase, setShowNextPhrase] = useState(false);
  const typingSpeed = 100;
  const delayBetweenPhrases = 1500;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPhrase.length < phrases[currentPhraseIndex].length) {
        setCurrentPhrase(
          (prevPhrase) =>
            prevPhrase +
            phrases[currentPhraseIndex].charAt(currentPhrase.length)
        );
      } else {
        setShowNextPhrase(true);
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
    };
  }, [currentPhrase, currentPhraseIndex]);

  useEffect(() => {
    if (showNextPhrase) {
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setCurrentPhrase("");
        setShowNextPhrase(false);
      }, delayBetweenPhrases);
    }
  }, [showNextPhrase]);

  return (
    <article id="about" className="container m-auto scroll-mt-24 my-24">
      <div className="grid grid-rows-2 md:grid-cols-2">
        <div className="col-span-1 row-span-4 px-8 flex flex-col justify-center">
          <div className="my-4 flex">
            <Link target="_blank" href={"https://github.com/Srezequielr"}>
              <Image src={gitHub} className="w-6 md:w-10 mx-2 md:mx-3" />
            </Link>
            <Link target="_blank" href={"https://www.linkedin.com/in/julianriera/"}>
              <Image src={linkedIn} className="w-6 md:w-10 mx-2 md:mx-3  " />
            </Link>
          </div>

          <h1 className="text-4xl md:text-6xl mb-5 font-bold">
            Julian Ezequiel Riera
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4">
            <span className="font-bold">{currentPhrase}</span> Developer
          </h2>
          <p className="text-xl mb-4">
            Si tengo que definir mi perfil profesional, seria perfeccionista.{" "}
            <br />
            Tengo un amplio abanico de tecnologias y conocimientos adquiridos
            como asi una inclinacion hacia el Front End. <br />
            Soy un desarrollador proactivo, con predispocision al cambio y a la
            adaptacion.
          </p>
        </div>
        <div className="col-span-1 row-span-4 px-8 flex flex-col justify-center">
          <Image
            alt="Julian Riera Profile"
            className="rounded-full m-auto"
            src={profile}
          />
        </div>
      </div>
    </article>
  );
}
