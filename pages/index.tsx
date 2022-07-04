import type { ReactElement } from "react";
import { Home } from "../components/home";

export default function Page() {
	return <Home />;
}

Page.getLayout = function getLayout(page: ReactElement) {
	return <>{page}</>;
};
