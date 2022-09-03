import {FC} from "react";

interface Props {
	title?: string;
}

export const BlogFooter: FC<Props> = (Props) => {
	const linkStyle = {
		marginLeft: "0",
	};

	const text =
		"If there was something technically wrong in this article feel free to make a pull request here:";
	const link = "https://github.com/LachlanStephan/mysite";

	return (
		<>
			<p>{Props.title}</p>
			<br />
			<p>{text}</p>
			<a style={linkStyle} href={link} target="_blank">
				Repo
			</a>
		</>
	);
};
