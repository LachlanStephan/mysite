import { Footer } from "./footer";
import { Header } from "./header";

export default function Layout({ children }) {
  return (
    <>
      <main className="dark:text-gray-100 flex justify-center container px-6 pb-6 pt-2 w-screen text-black">
      <div className="w-full lg:w-3/5">
        <Header />
        {children}
        <Footer />
      </div>
      </main>
    </>
  );
}
