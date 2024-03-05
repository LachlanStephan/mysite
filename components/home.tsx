import { FC } from "react";
import { CommitChart } from "../components/commits/commitChart";
import { Interests } from "../components/interests/interests";
import { About } from "./about/about";
import Head from "next/head";
import Layout from "../components/layout";

export const Home: FC = () => {
	return (
		<Layout>
			<Head>
				<title>Home - Lachlan Stephan</title>
			</Head>
			<div className="overflow-hidden">
				<About name="Lachlan Stephan" sub_title="This site is just a fun/personal outlet - I use to it to try different technologies and will occasionally write about stuff" />
				<Interests title="Currently interested in" />
				<CommitChart />
			</div>
		</Layout>
	);
};
