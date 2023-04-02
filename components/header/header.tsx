import { FC, useState } from "react";
import Image from "next/image";
import { Nav } from "../nav/nav";
import headIcon from "../../public/headIcon.png";

interface SpeakSettings {
	show: boolean;
	text: string;
	timeLimit: number;
}

export const Header: FC = () => {
	const settings: SpeakSettings = {
		show: false,
		text: "Hi!",
		timeLimit: 2000,
	};
	const [speak, setSpeak] = useState(settings.show);

	const sayHi = () => {
		setSpeak(true);
		setTimeout(() => {
			setSpeak(false);
		}, settings.timeLimit);
	};

	return (
		<header className="text-md min-h-20 py-4 flex justify-between items-center w-full">
			<div className="flex items-center">
				{speak ? (
					<span className="overflow-auto text-[#ffc0cb] overflow-hidden whitespace-nowrap animate-typing">
						{settings.text}
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
		</header>
	);
};
