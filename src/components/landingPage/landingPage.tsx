import {motion} from "framer-motion";

const LandingPage: React.FC = () => {
	return (
		<div className="w-screen h-screen bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-300 justify-items-center align-items-center">
			<motion.div
				initial={{
					x: 1000,
				}}
				animate={{
					x: 0,
				}}
				transition={{
					duration: 0.3,
				}}
			>
				W
			</motion.div>
			<motion.div
				initial={{
					x: 1000,
				}}
				animate={{
					x: 0,
				}}
				transition={{
					duration: 0.5,
				}}
			>
				e
			</motion.div>
			<motion.div
				initial={{
					x: 1000,
				}}
				animate={{
					x: 0,
				}}
				transition={{
					duration: 0.7,
				}}
			>
				l
			</motion.div>
			<motion.div
				initial={{
					x: 1000,
				}}
				animate={{
					x: 0,
				}}
				transition={{
					duration: 0.9,
				}}
			>
				c
			</motion.div>
			<motion.div
				initial={{
					x: 1000,
				}}
				animate={{
					x: 0,
				}}
				transition={{
					duration: 1.1,
				}}
			>
				o
			</motion.div>
			<motion.div
				initial={{
					x: 1000,
				}}
				animate={{
					x: 0,
				}}
				transition={{
					duration: 1.3,
				}}
			>
				m
			</motion.div>
			<motion.div
				initial={{
					x: 1000,
				}}
				animate={{
					x: 0,
				}}
				transition={{
					duration: 1.5,
				}}
			>
				e
			</motion.div>
		</div>
	);
};

export default LandingPage;
