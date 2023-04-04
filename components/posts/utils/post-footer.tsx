import { FC } from "react";

interface Props {
	title?: string;
	text?: string;
	isBlog: boolean;
	isBook: boolean;
}

export const PostFooter: FC<Props> = (Props) => {
	const blogFallback =
		"If there was something technically wrong in this article feel free to make an issue or pull request here:";
	const bookFallback =
		"If you've also read this book and feel that something here wasn't right - you can make an issue or pull request here:";
	const link = "https://github.com/LachlanStephan/mysite";

	const getText = (): string => {
		if (!Props.isBlog && !Props.isBook) {
			return "";
		}
		if (Props.text) {
			return Props.text;
		}
		return Props.isBlog ? blogFallback : bookFallback;
	};

	return (
		<>
			<h3>{Props.title}</h3>
			<p>{getText()}</p>
			<a className="ml-0" href={link} target="_blank">
				Repo
			</a>
		</>
	);
};
