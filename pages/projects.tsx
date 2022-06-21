import { FC } from "react";
import { ProjStuff } from "../components/projects/projectStuff";
import Layout from "../components/layout";

interface Props {
  title: string;
  // rest to be added
}

const Projects: FC<Props> = (Props) => {
  return (
    <>
      <Layout>
        <h1>Projects</h1>
        <ProjStuff />
      </Layout>
    </>
  );
};

export default Projects;
