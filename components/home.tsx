import { FC } from "react";
import { Texts } from "../components/texts";
import { textContent } from "../components/textsContent";
import { CommitChart } from "../components/commitChart";
import { Interests } from "../components/interests";
import { About } from "../components/about";

interface textStuff {
	title: string;
	content: string;
}

export const Home: FC = () => {
	const texts: textStuff[] = textContent;

	const textsList = texts.map((val, index) => {
		return <Texts key={index} title={val.title} text={val.content} />;
	});

	return (
		<>
			<About
				name="Lachlan Stephan"
				desc="I am a Junior Software Developer who enjoys all things web and is looking "
			/>
			<Interests title="Current interests" />
			<h2 className="text-lg font-bold">About</h2>
			<br />
			{textsList}
			<CommitChart />
		</>
	);
};
