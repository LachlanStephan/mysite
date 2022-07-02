import { FC } from "react";
import Link from "next/link";
import { NavConfig } from "./navConfig";
import ToggleMode from "../hooks/darkmode";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import { useState } from "react";

interface config {
	href: string;
	title: string;
}

export const Header: FC = () => {
  const [light, setLight] = useState(true);

  const toggleColour = () => {
    setLight(!light);
    ToggleMode();
  }

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
			<header className="dark:bg-black bg-white flex sticky top-0 border-b-2 py-2 border-b-gray-300">{links}
        <span className="flex justify-center items-center cursor-pointer" onClick={toggleColour}>
          {light ? <FaRegSun /> : <FaRegMoon />}
        </span>
      </header>
		</>
	);
};
