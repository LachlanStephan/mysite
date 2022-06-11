import { FC } from "react";

interface Props {
  title: string;
  text: string;
}

export const Texts: FC<Props> = (Props) => {
  return (
    <>
      <h2 className="text-gray-800 font-bold">{Props.title}</h2>
      <p>{Props.text}</p>
      <br />
    </>
  );
};
