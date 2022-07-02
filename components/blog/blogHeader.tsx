import Head from "next/head";
import { FC } from "react";

interface Props {
	title: string;
  date: string;
  author: string;
  headMeta: string;
}

export const BlogHeader: FC<Props> = (Props) => {
	return (
		<section>
    <Head>
      <title>{Props.headMeta} - Lachlan Stephan</title>
    </Head>
      <p className="my-2">
        <strong>Date:</strong>
        {Props.date}
      </p>
      <p className="my-2">
        <strong>Author:</strong>
        {Props.author}
      </p>
			<h1>{Props.title}</h1>
		</section>
	);
};
