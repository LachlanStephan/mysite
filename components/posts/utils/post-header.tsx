import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

interface Props {
	title: string;
	date: string;
	author: string;
	headMeta: string;
	backLink: string;
}

export const PostHeader: FC<Props> = (Props) => {
	const back = "<- Back";
	return (
		<>
			<Head>
				<title>{Props.headMeta} - Lachlan Stephan</title>
			</Head>
			<header className="my-4">
				<h1>{Props.title}</h1>
				<p className="my-2">
					<strong>Author: </strong>
					{Props.author}
				</p>
				<p className="my-2">
					<strong>Date: </strong>
					{Props.date}
				</p>
				<Link href={"/" + Props.backLink}>
					<a>{back}</a>
				</Link>
			</header>
		</>
	);
};
