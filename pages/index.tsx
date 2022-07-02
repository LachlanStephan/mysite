import type { ReactElement,} from "react";
import { Home } from "../components/home";
import Layout from "../components/layout";


export default function Page() {
  return <Home />;
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
