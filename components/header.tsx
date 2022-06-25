import { FC } from "react";
import Link from "next/link";
import { NavConfig } from "./navConfig";

interface config {
	href: string;
	title: string;
}

export const Header: FC = () => {
	const conf: config[] = NavConfig;
	const links = conf.map((link, i) => {
		return (
			<Link key={i} href={link.href}>
				<a className="my-2 mr-2">{link.title}</a>
			</Link>
		);
	});

	return (
		<>
			<div>{links}</div>
			<br />
		</>
	);
};
