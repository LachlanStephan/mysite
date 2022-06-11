import { FC } from "react";

interface Props {
  title: string;
  intrest: string;
}

export const Interests: FC<Props> = (Props) => {
  return (
    <>
      <h2 className="text-lg font-bold">{Props.title}</h2>
      <div className="grid grid-cols-2 grid-rows-auto">
        <div className="text-gray-800 font-bold">Interest:</div>
        <div className="text-gray-800 font-bold">Why:</div>
        <div>{Props.intrest}</div>
        <div>Cool</div>
      </div>
      <br />
    </>
  );
};
