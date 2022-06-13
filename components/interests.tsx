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
				<div>{int.interest}</div>
				<div>{int.why}</div>
			</React.Fragment>
		);
	});
	return (
		<>
			<h2 className="text-lg font-bold">{Props.title}</h2>
			<br />
			<div className="grid grid-gap-1 grid-cols-2 grid-rows-auto">
				<div className="text-gray-800 font-bold">Interest:</div>
				<div className="text-gray-800 font-bold">Why:</div>
				{table}
			</div>
			<br />
		</>
	);
};
