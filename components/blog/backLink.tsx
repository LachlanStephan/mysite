import { FC } from "react";
import Link from "next/link";

interface Props {
  link: string;
}

export const BackLink: FC<Props> = (Props) => {
  return (
    <>
      <Link href="/blogs">
        <a className="text-lg font-bold hover:underline">
          {Props.link}
        </a>
      </Link>
    </>
  );
};
