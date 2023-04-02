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
				<About
					name="Lachlan Stephan"
					sub_title="I am primarily a backend dev who loves sports, video games and programming."
				/>
				<Interests title="Current interests" />
				<CommitChart />
			</div>
		</Layout>
	);
};
