import type { NextPage } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Texts } from "../components/texts";
import { textContent } from "../components/textsContent";
import { CommitChart } from "../components/commitChart";
import { Interests } from "../components/interests";

interface textStuff {
  title: string;
  content: string;
}

const Home: NextPage = () => {
  const texts: textStuff[] = textContent;

  const textsList = texts.map((val, index) => {
    return <Texts key={index} title={val.title} text={val.content} />;
  });

  return (
    <>
      <main className="container w-full md:w-4/5 lg:w-4/5 mx-auto my-0  p-4 text-black">
        <Header
          name="Lachlan Stephan"
          desc="I am a Junior Software Developer who enjoys all things web and is looking "
        />
        <Interests title="Current interests" intrest="Something" />
        <h2 className="text-lg font-bold">About</h2>
        {textsList}
        <CommitChart />
        <Footer />
      </main>
    </>
  );
};

export default Home;
