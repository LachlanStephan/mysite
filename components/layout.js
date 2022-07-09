import { Footer } from "./footer";
import { Header } from "./header";

export default function Layout({ children }) {
	return (
		<main className="dark:text-gray-100 p-2 w-full 2xl:w-4/5 text-black">
      <Header />
      {children}
      <Footer />
		</main>
	);
}
