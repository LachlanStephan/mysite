import { FC } from "react";

interface Props {
	name: string;
	desc: string;
}

export const About: FC<Props> = (Props) => {
	return (
		<>
    <section>
			<h1>{Props.name}</h1>
			<p className="text-base">{Props.desc}</p>
    </section>
		</>
	);
};
