import React, { FC } from "react";
import { InterestsContent } from "./interestsContent";

interface Props {
	title: string;
}

interface InterestConfig {
	interest: string;
	why: string;
}

export const Interests: FC<Props> = (Props) => {
	const content: InterestConfig[] = InterestsContent;
	const table = content.map((int, i) => {
		return (
			<React.Fragment key={i}>
				<h4 className="dark:text-gray-400 sm:hidden">Interest:</h4>
				<div className="mb-4">{int.interest}</div>
				<h4 className="dark:text-gray-400 sm:hidden">Why:</h4>
				<div className="mb-4">{int.why}</div> 
			</React.Fragment>
		);
	});
	return (
		<section>
			<h2 className="text-lg font-bold">{Props.title}</h2>
			<div className="grid grid-gap-1 grid-cols-1 grid-rows-auto sm:grid-cols-2">
				<h4 className="dark:text-gray-400 hidden sm:block">Interest:</h4>
				<h4 className="dark:text-gray-400 hidden sm:block">Why:</h4>
				{table}
			</div>
		</section>
	);
};
