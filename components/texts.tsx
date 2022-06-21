import { FC } from "react";

interface Props {
  title: string;
  text: string;
}

export const Texts: FC<Props> = (Props) => {
  return (
    <>
      <h4>{Props.title}</h4>
      <p>{Props.text}</p>
      <br />
    </>
  );
};
