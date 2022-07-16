import React, { FC } from "react";
import Layout from "../components/layout";
import { Header } from "../components/blog/header";
import Link from "next/link";
import Head from "next/head";
import { Config } from "../components/blog/config";

const Blogs: FC = () => {
	const links = Config.map((v, i) => {
		return (
			<React.Fragment key={i}>
				<Link href={v.link}>
					<a className="mb-4 ml-0 pl-0">{v.title}</a>
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
				<Header title="Blogs" />
				<aside className="flex flex-col">{links}</aside>
			</section>
		</Layout>
	);
};

export default Blogs;
