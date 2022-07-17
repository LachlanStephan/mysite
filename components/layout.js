import { Footer } from "./footer/footer";
import { Header } from "./header";
import Head from "next/head";

export default function Layout({ children }) {
	return (
    <>
      <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="pb-4 pl-4 pr-4 w-full md:w-4/5 xl:w-3/5 text-light_text dark:text-dark_text bg-light_background dark:bg-dark_background">
        <Header />
        {children}
        <Footer />
      </main>
    </>
	);
}
