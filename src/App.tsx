import React, {useEffect} from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Github from "./components/about/github";
import Works from "./components/works/works";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import ScrollToTop from "./components/scrollToTop/scrollToTop";

import {
	FaNode,
	FaEnvelope,
	FaGithub,
	FaLinkedin,
	FaStar,
	FaArrowAltCircleUp,
} from "react-icons/fa";
// import LandingPage from "./components/landingPage/landingPage";
import {
	SiTypescript,
	SiJavascript,
	SiPhp,
	SiReact,
	SiHtml5,
	SiCss3,
	SiNextDotJs,
	SiGit,
	SiNeovim,
	SiMysql,
	SiJava,
	SiPython,
	SiDocker,
	SiNpm,
	SiWebpack,
	SiJest,
	SiBootstrap,
	SiTailwindcss,
	SiLinux,
	SiCsharp,
	SiSvelte,
	SiRust,
	SiAngular,
} from "react-icons/si";
import {motion} from "framer-motion";

// Up arrow
const upArrow = <FaArrowAltCircleUp />;

// Current skill icons
const JS = <SiJavascript />;
const PHP = <SiPhp />;
const TS = <SiTypescript />;
const ReactIcon = <SiReact />;
const html5 = <SiHtml5 />;
const css3 = <SiCss3 />;
const node = <FaNode />;
const nextJS = <SiNextDotJs />;
const git = <SiGit />;
const nvim = <SiNeovim />;
const mysql = <SiMysql />;
const npm = <SiNpm />;
const jest = <SiJest />;
const bootstrap = <SiBootstrap />;
const tailwind = <SiTailwindcss />;
const svelte = <SiSvelte />;
const angular = <SiAngular />;

// Desired skill icons
const java = <SiJava />;
const python = <SiPython />;
const docker = <SiDocker />;
const webpack = <SiWebpack />;
const linux = <SiLinux />;
const cSharp = <SiCsharp />;
const rust = <SiRust />;

// Footer icon
const ghub = <FaGithub />;
const mail = <FaEnvelope />;
const linkedIn = <FaLinkedin />;

// Star icon
const star = <FaStar />;

const App: React.FC = () => {
	// const [showSite, setShowSite] = useState(false);

	// useEffect(() => {
	//   setTimeout(() => {
	//     setShowSite(true);
	//   }, 2500);
	// }, []);

	return (
		<>
			{/* {showSite ? ( */}
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					duration: 0.5,
				}}
			>
				<div className="bg-white text-black dark:bg-black dark:text-green-500 transition duration-400 p-5">
					<div className="justify-content-center w-full md:w-4/5 lg:w-4/5 xl:w-3/5 m-auto">
						<div>
							<Header
								link1="About"
								link2="Works"
								link3="Skills"
								link4="Contact"
							/>
							<Github
								title="Current project"
								owner="LachlanStephan"
								repo="CryptoTracker"
								star={star}
							/>
							<About
								aboutText="My name is Lachlan. I am a junior software engineer who loves Javascript and web apps."
								aboutText2="My main goal is to work with web apps as this is what I enjoy and what gets me excited to code. I am currently learning Typescript && Svelte and want to go deep with langauges such as Python and Rust."
								aboutText3="My projects are below, starting with the most recent."
							/>
							<Works />
							<ScrollToTop upArrow={upArrow} />
							<Skills
								title1="Current skills"
								icon1={JS}
								icon2={TS}
								icon3={node}
								icon4={html5}
								icon5={css3}
								icon6={ReactIcon}
								icon7={nextJS}
								icon8={PHP}
								icon9={git}
								icon10={nvim}
								icon11={mysql}
								icon12={npm}
								icon13={jest}
								icon14={bootstrap}
								icon15={tailwind}
								icon22={svelte}
								icon24={angular}
								title2="Desired skills"
								icon16={java}
								icon17={python}
								icon18={docker}
								icon19={webpack}
								icon20={linux}
								icon21={cSharp}
								icon23={rust}
							/>
							<Contact />
							<Footer
								footerLink1={ghub}
								footerLink2={mail}
								footerLink3={linkedIn}
							/>
						</div>
					</div>
				</div>
			</motion.div>
			{/* ) : (
        <LandingPage />
      )} */}
		</>
	);
};

export default App;
