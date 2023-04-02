import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import MobileHeader from "./header/mobile-header";
import Head from "next/head";

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="description"
					content="This is a personal website used to write short blogs and share info about said person"
				/>
			</Head>
			<main className="pb-4 pl-4 pr-4 w-full md:w-4/5 lg:w-3/5">
				<div className="hidden sticky top-0 lg:flex">
					<Header />
				</div>
				<div className="flex sticky top-0 lg:hidden">
					<MobileHeader />
				</div>
				<div id="children">
					{children}
					<Footer />
				</div>
			</main>
		</>
	);
}
