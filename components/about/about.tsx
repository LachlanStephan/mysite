import { FC } from "react";
import { Text } from "./about-text";

interface Props {
	name: string;
	sub_title: string;
}

interface AboutText {
	bullet_point: string;
}

export const About: FC<Props> = (Props) => {
	const texts: AboutText[] = Text;
	const about_points = texts.map((t, i) => {
		return <li key={i}>{t.bullet_point}</li>;
	});
	return (
		<section>
			<h1>{Props.name}</h1>
			<p className="text-base">{Props.sub_title}</p>
			<ul>{about_points}</ul>
		</section>
	);
};
