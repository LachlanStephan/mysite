import { Footer } from "./footer";
import { Header } from "./header";
import Head from "next/head";

export default function Layout({ children }) {
	return (
    <>
    <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <main className="overflow-hidden dark:text-gray-100 p-4 w-full 2xl:w-4/5 text-black">
        <Header />
        {children}
        <Footer />
      </main>
    </>
	);
}
