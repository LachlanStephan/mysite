import { FC, useState, useEffect } from "react";

interface Props {
  eventsTotal: any[];
}

export const CommitBoard: FC<Props> = (Props) => {
  const [squares, setSquares] = useState<any>([]);

  useEffect(() => {
    setSquares(Props.eventsTotal);
    console.log(squares);
  }, []);

  const board = squares.map((v: any, i: any) => {
    const currDate = new Date();
    console.log(currDate)
    if (v.type === "PushEvent") {
      console.log(v.created_at)
      return <div key={i} className="h-2 w-2 bg-green-600"></div>;
    }
    return <div key={i} className="h-2 w-2 bg-black"></div>;
  });

  return (
    <>
      <h1 className="font-bold">Github:</h1>
      <br />
      <div className="grid justify-center gap-1 grid-rows-10 grid-cols-10  h-auto w-auto">
        {board}
      </div>
    </>
  );
};
