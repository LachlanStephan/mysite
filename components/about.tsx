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
			<h2 className="text-base">{Props.desc}</h2>
			<br />
		</>
	);
};
