import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavConfig } from "./navConfig";
import ToggleMode from "../hooks/darkmode";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import { useState } from "react";
import headIcon from "../public/headIcon.png";

interface config {
  href: string;
  title: string;
}

export const Header: FC = () => {
  const [light, setLight] = useState(true);
  const [speak, setSpeak] = useState(false);
  const [word, setWord] = useState("");
  const str = "Hello there!";

  const toggleColour = () => {
    setLight(!light);
    ToggleMode();
  };

  const sayHi = () => {
    setSpeak(true);
    handlePrinting();
    setTimeout(() => {
      setSpeak(false);
    }, 5000);
  };

  const handlePrinting = () => {
    const letters = str.split("");
    let x: string[] = [];
    for (let i = 0; i < letters.length; i++) {
      setTimeout(() => {
        x.push(letters[i]);
        console.log(letters[i], word);
        setWord(x.join(""));
      }, 1000);
      console.log(word);
    }
  };

  const conf: config[] = NavConfig;
  const links = conf.map((link, i) => {
    return (
      <Link key={i} href={link.href}>
        <a className="mr-2">{link.title}</a>
      </Link>
    );
  });

  return (
    <>
      <header className="text-md h-20 dark:bg-black bg-white flex items-center sticky top-0 border-b-2 py-2 border-b-gray-300">
        {speak ? <span className="overflow-hidden whitespace-nowrap animate-typing">{str}</span> : null}
        <Image
          onClick={sayHi}
          className="transition transform hover:translate-y-0.5"
          src={headIcon}
          alt="cartoon picture of head"
          width={40}
          height={40}
        />
        {links}
        <span
          className="flex justify-center items-center cursor-pointer"
          onClick={toggleColour}
        >
          {light ? <FaRegSun /> : <FaRegMoon />}
        </span>
      </header>
    </>
  );
};
