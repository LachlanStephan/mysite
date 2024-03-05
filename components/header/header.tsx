import { FC, useState } from "react";
import Image from "next/image";
import { Nav } from "../nav/nav";
import headIcon from "../../public/headIcon.png";

export const Header: FC = () => {
	return (
		<header className="text-md min-h-20 py-4 flex justify-between items-center w-full">
			<div className="flex items-center">
				<Image
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
