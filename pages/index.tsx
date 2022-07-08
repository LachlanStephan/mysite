import type { ReactElement } from "react";
import { Home } from "../components/home";
import Layout from "../components/layout";

export default function Page() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
