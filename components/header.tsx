import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavConfig } from "./navConfig";
import { ToggleMode } from "../utils/darkmode";
import { FaRegLightbulb } from "react-icons/fa";
import headIcon from "../public/headIcon.png";
import { theme } from "../theme.js";

interface config {
  href: string;
  title: string;
}

export const Header: FC = () => {
  const [speak, setSpeak] = useState(false);
  const str = "Hello!";
  const bgLight = theme.light.background;
  const bgDark = theme.dark.background;

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

  // this probably needs some love
  const headerStyles = ():string => {
    const dark = "dark:bg-" + "[" + bgDark + "]";
    const light = "bg-" +  "[" + bgLight + "]";
    return "sticky top-0 text-md min-h-20 py-4 drop-shadow-sm flex justify-between items-center" + " "  + light + " " + dark;
  }

  return (
    <header className={headerStyles()}>
      <div className="flex items-center">
        {speak ? (
          <span className="overflow-auto text-[#ffc0cb] overflow-hidden whitespace-nowrap animate-typing">
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
      </div>
      <span
        className="h-8 w-8 ml-2 hover:border-2 border-gray-400 rounded-md transistion active:translate-y-1 duration-300 flex justify-center items-center cursor-pointer"
        onClick={toggleColour}
      >
        <FaRegLightbulb />
      </span>
    </header>
  );
};
