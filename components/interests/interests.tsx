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
			<div className="mb-2" key={i}>
				<h3>{int.interest}:</h3>
				<p>{int.why}</p>
			</div>
		);
	});
	return (
		<section>
			<h2>{Props.title}</h2>
			<div className="grid grid-cols-1 grid-rows-auto">
				{table}
			</div>
		</section>
	);
};
