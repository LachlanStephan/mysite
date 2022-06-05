import type { NextPage } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Texts } from "../components/texts";
import { textContent } from "../components/textsContent";
import { CommitChart } from "../components/commitChart";

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
                    desc="This is my personal site where I write about learnings and other random stuff"
                />
                {textsList}
                <CommitChart />
                <Footer />
            </main>
        </>
    );
};

export default Home;
