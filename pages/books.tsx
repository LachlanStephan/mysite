import React from "react";
import Layout from "../components/layout";
import { Header } from "../components/posts/utils/header";
import Link from "next/link";
import Head from "next/head";
import { Config } from "../components/posts/books/config";
import Tags from "../components/posts/utils/tags";

const Reading = () => {
	const links = Config.map((v, i) => {
		return (
			<React.Fragment key={i}>
				<Tags tags={v.tags} />
				<Link href={v.link}>
					<a className="text-lg mb-8 ml-0">{v.title}</a>
				</Link>
			</React.Fragment>
		);
	});

	return (
		<Layout>
			<Head>
				<title>Books - Lachlan Stephan</title>
			</Head>

			<section>
				<Header title="A list of books where I have either had some thoughts, wanted to review, or both" />
			</section>
			<aside className="flex flex-col">{links}</aside>
		</Layout>
	);
};

export default Reading;
