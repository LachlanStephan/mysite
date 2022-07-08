import { Footer } from "./footer";
import { Header } from "./header";

export default function Layout({ children }) {
	return (
		<main className="dark:text-gray-100 flex justify-center px-6 pb-6 pt-2 w-full 2xl:w-4/5 text-black">
			<div className="w-full">
				<Header />
				{children}
				<Footer />
			</div>
		</main>
	);
}
