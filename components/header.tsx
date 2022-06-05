import { FC } from "react";

interface Props {
  name: string,
  desc: string,
}

export const Header: FC<Props> = (Props) => {
  return (
    <>
      <h1 className="text-2xl font-bold">{Props.name}</h1>
      <br />
      <h2 className="text-base">{Props.desc}</h2>
      <br />
    </>
  );
};
