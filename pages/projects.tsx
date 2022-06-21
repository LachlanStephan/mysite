import { FC } from "react";
import { ProjStuff } from "../components/projects/projectStuff";
import Layout from "../components/layout";
import Head from "next/head";

const Projects: FC = () => {
  return (
    <>
      <Head>
        <title>Projects - Lachlan Stephan</title>
      </Head>
      <Layout>
        <h1>Projects</h1>
        <ProjStuff />
      </Layout>
    </>
  );
};

export default Projects;
