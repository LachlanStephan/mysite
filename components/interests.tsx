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
				<h4 className="sm:hidden">Interest:</h4>
				<div className="mb-4">{int.interest}</div>
				<h4 className="sm:hidden">Why:</h4>
				<div className="mb-4">{int.why}</div> 
			</React.Fragment>
		);
	});
	return (
		<>
			<h2 className="text-lg font-bold">{Props.title}</h2>
			<br />
			<div className="grid grid-gap-1 grid-cols-1 grid-rows-auto sm:grid-cols-2">
				<h4 className="hidden sm:block">Interest:</h4>
				<h4 className="hidden sm:block">Why:</h4>
				{table}
			</div>
			<br />
		</>
	);
};
