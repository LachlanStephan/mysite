import { FC } from "react";

interface Props {
	name: string;
	desc: string;
}

export const About: FC<Props> = (Props) => {
	return (
		<>
			<h1>{Props.name}</h1>
			<br />
			<p className="text-base">{Props.desc}</p>
			<br />
		</>
	);
};
