import { FC } from "react";

interface Props {
  title: string;
  text: string;
}

export const Texts: FC<Props> = (Props) => {
  return (
    <>
      <h1 className="text-lg font-bold">{Props.title}</h1>
      <p>{Props.text}</p>
      <br />
    </>
  );
};
