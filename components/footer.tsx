import { FC } from "react";
import { FaGithubAlt, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export const Footer: FC = () => {
	return (
		<>
			<footer className="w-full border-t-2 py-2">
				<div className="flex w-20 justify-between">
					<a href="https://github.com/LachlanStephan" target="_blank">
						<FaGithubAlt />
					</a>
					<a
						href="https://www.linkedin.com/in/lachlan-stephan-b58a1a213/"
						target="_blank"
					>
						<FaLinkedinIn />
					</a>
					<a href="mailto:ljstephan116@gmail.com">
						<FaEnvelope />
					</a>
				</div>
			</footer>
		</>
	);
};
