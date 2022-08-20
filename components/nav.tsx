import { FC } from "react";
import Link from "next/link";
import { NavConfig } from "./navConfig";

interface config {
  href: string;
  title: string;
}

export const Nav: FC = () => {
  const conf: config[] = NavConfig;
  const links = conf.map((link, i) => {
    return (
      <Link key={i} href={link.href}>
        <a className="text-light_text dark:text-dark_text mr-2">{link.title}</a>
      </Link>
    );
  });
  return <>{links}</>;
};
