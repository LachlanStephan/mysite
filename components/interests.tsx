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
			<div className="mb-4" key={i}>
				<h4>{int.interest}:</h4>
				<p>{int.why}</p> 
			</div>
		);
	});
	return (
		<section>
			<h2 className="text-lg font-bold">{Props.title}</h2>
			<div className="grid grid-gap-1 grid-cols-1 grid-rows-auto">
				{table}
			</div>
		</section>
	);
};
