import { FC } from "react";
import { ProjStuff } from "../components/projects/projectStuff";
import Layout from "../components/layout";
import Head from "next/head";

const Projects: FC = () => {
	return (
		<Layout>
			<Head>
				<title>Projects - Lachlan Stephan</title>
			</Head>
			<section>
				<h1>Projects</h1>
				<ProjStuff />
			</section>
		</Layout>
	);
};

export default Projects;
