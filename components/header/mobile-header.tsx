import { FC, useState } from "react";
import { Nav } from "../nav/nav";
import { FaBars, FaWindowClose } from "react-icons/fa";
import headIcon from "../public/headIcon.png";

const MobileHeader: FC = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		if (!showMenu) {
			toggleSite("none");
		} else {
			toggleSite("block");
		}
		setShowMenu(!showMenu);
	};

	const toggleSite = (display: string) => {
		const elements = document.getElementById("children");
		if (elements !== null) {
			elements.style.display = display;
		}
	};

	return (
		<>
			<header className="sticky flex flex-col bg-light_background dark:bg-dark_background flex py-4 w-full">
				<div className="flex justify-between">
					<button
						aria-label={"mobile menu"}
						className=""
						onClick={toggleMenu}
					>
						{showMenu ? <FaWindowClose /> : <FaBars />}
					</button>
				</div>
				{showMenu ? (
					<aside className="bg_light_background text-gray-600 dark:bg_dark_background h-full w-full">
						<ul className="flex flex-col">
							<Nav />
						</ul>
					</aside>
				) : null}
			</header>
		</>
	);
};

export default MobileHeader;
