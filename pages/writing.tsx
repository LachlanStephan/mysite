import React, { FC, useEffect } from "react";
import Layout from "../components/layout";
import { Header } from "../components/blog/header";
import Link from "next/link";
import Head from "next/head";
import { Config } from "../components/blog/config";
import Tags from "../components/blog/tags";

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

	const getBlogs = async () => {
		const req = await fetch("http://localhost:8080/blog", {
			method: "GET",
		});
		const res = req.json();
		console.log(res);
	};

	useEffect(() => {
		getBlogs();
	}, []);

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
