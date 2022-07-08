import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavConfig } from "./navConfig";
import ToggleMode from "../hooks/darkmode";
import { FaRegLightbulb } from "react-icons/fa";
import headIcon from "../public/headIcon.png";

interface config {
  href: string;
  title: string;
}

export const Header: FC = () => {
  const [speak, setSpeak] = useState(false);
  const str = "Hello!";

  const toggleColour = () => {
    ToggleMode();
  };

  const sayHi = () => {
    setSpeak(true);
    setTimeout(() => {
      setSpeak(false);
    }, 5000);
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
      <header className="text-md min-h-20 dark:bg-black bg-white border-b-2 py-2 flex items-center sticky top-0 w-full overflow-hidden">
        {speak ? (
          <span className="w-2 overflow-auto text-[#ffc0cb] overflow-hidden whitespace-nowrap animate-typing">
            {str}
          </span>
        ) : null}
        <Image
          onClick={sayHi}
          className="cursor-pointer transition transform hover:translate-y-0.5"
          src={headIcon}
          alt="cartoon picture of head"
          width={40}
          height={40}
        />
        {links}
        <span
          className="h-8 w-8 ml-2 transistion active:translate-y-1 duration-500 flex justify-center items-center cursor-pointer"
          onClick={toggleColour}
        >
          <FaRegLightbulb />
        </span>
      </header>
    </>
  );
};
