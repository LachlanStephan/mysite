import React, { FC } from "react";
import Layout from "../components/layout";
import { Header } from "../components/posts/utils/header";
import Link from "next/link";
import Head from "next/head";
import { Config } from "../components/posts/blogs/config";
import Tags from "../components/posts/utils/tags";

const Blogs: FC = () => {
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
				<title>Writing - Lachlan Stephan</title>
			</Head>
			<section>
				<Header title="This is a collection of short writings. This is used as an outlet and is just thoughts to paper" />
				<aside className="flex flex-col">{links}</aside>
			</section>
		</Layout>
	);
};

export default Blogs;
