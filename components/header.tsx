import {FC, useState} from "react";
import Image from "next/image";
import {Nav} from "./nav";
import headIcon from "../public/headIcon.png";
import {ThemeToggle} from "./theme-toggle";

export const Header: FC = () => {
	const [speak, setSpeak] = useState(false);
	const str = "Hi!";

	const sayHi = () => {
		setSpeak(true);
		setTimeout(() => {
			setSpeak(false);
		}, 5000);
	};

	return (
		<header className="bg-light_background dark:bg-dark_background text-md min-h-20 py-4 flex justify-between items-center w-full">
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
				<Nav />
			</div>
			<ThemeToggle />
		</header>
	);
};
