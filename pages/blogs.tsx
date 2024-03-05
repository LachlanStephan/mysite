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
				<title>Blogs - Lachlan Stephan</title>
			</Head>
			<section>
				<Header title="Some ramblings in the from of blog posts" />
				<aside className="flex flex-col">{links}</aside>
			</section>
		</Layout>
	);
};

export default Blogs;
