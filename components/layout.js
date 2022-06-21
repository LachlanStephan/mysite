import { Footer } from "./footer";
import { Header } from "./header";

export default function Layout({ children }) {
  return (
    <>
      <main className="container w-full md:w-4/5 lg:w-4/5 mx-auto my-0  p-4 text-black">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
