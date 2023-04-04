import { FC } from "react";

interface Props {
	title: string;
}

export const Header: FC<Props> = (Props) => {
	return (
		<>
			<h1>{Props.title}</h1>
		</>
	);
};
