import { FC, useEffect } from "react";
// import { Texts } from "../components/texts";
// import { textContent } from "../components/textsContent";
import { CommitChart } from "../components/commitChart";
import { Interests } from "../components/interests";
import { About } from "../components/about";
import Head from "next/head";

// interface textStuff {
// title: string;
// content: string;
// }

export const Home: FC = () => {
  // const texts: textStuff[] = textContent;

  // const textsList = texts.map((val, index) => {
  // return <Texts key={index} title={val.title} text={val.content} />;
  // });

  // Implement if I want about sections
  // <h2 className="text-lg font-bold">About</h2>
  // <br />
  // {textsList}

  return (
    <>
      <Head>
        <title>Home - Lachlan Stephan</title>
      </Head>
      <About
        name="Lachlan Stephan"
        desc="Junior Software Dev - trying to be a somewhat decent developer..."
      />
      <Interests title="Current interests" />
      <CommitChart />
    </>
  );
};
