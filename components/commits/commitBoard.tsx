import { FC, useState, useEffect } from "react";
import { format } from "date-fns";

interface Props {
  eventsTotal: any[];
}

interface CommitDiv {
  isCommit: boolean;
  date: string;
  count: number;
}

export const CommitBoard: FC<Props> = (Props) => {
  const commits = Props.eventsTotal;
  const boardDates: string[] = [];

  const formatCreatedAt = (created_at: string): string => {
    const splitDate: string[] = created_at.split("-");
    const year: string = splitDate[0];
    const month: string = splitDate[1];
    const day: string = splitDate[2].substring(0, 2);
    return year + "-" + month + "-" + day;
  };

  let count = 30;
  const d = new Date();
  for (let i = 0; i < 30; i++) {
    boardDates.push(
      format(new Date().setDate(d.getDate() - count), "yyyy-MM-dd")
    );
    count = count - 1;
  }

  let board: CommitDiv[] = [];
  for (let i = 0; i < boardDates.length; i++) {
    let c: CommitDiv = {
      isCommit: false,
      date: boardDates[i],
      count: 0,
    };
    for (let j = 0; j < commits.length; j++) {
      if (boardDates[i] === formatCreatedAt(commits[j].created_at)) {
        if (
          commits[j].type === "PushEvent" ||
          commits[j].type === "CreateEvent"
        ) {
          c.isCommit = true;
          c.date = boardDates[i];
          c.count = c.count + 1;
        } else {
          c.isCommit = false;
          c.date = boardDates[i];
        }
      }
    }
    board.push(c);
  }

  const getBgColour = (count: number):string => {
    switch(true) {
      case count === 0:
        return "bg-gray-700"
      case count <= 2:
        return "bg-green-300"
      case count <= 4:
        return "bg-green-400"
      case count >= 6:
        return "bg-green-500"
      default:
       return "bg-gray-700"
    }
  }

  const getClass = (count: number): string => {
    return "cursor-default group relative w-3 h-3 rounded-sm" + " " + getBgColour(count);
  };
board
  return (
    <>
      <h2>Github: Last 30 days</h2>
      <section className="grid gap-px grid-flow-col grid-cols-auto grid-rows-6 h-auto w-auto">
        {board.map((v: any, i: number) => {
          return (
              <div id={v.date} key={i} className={getClass(v.count)}>
                <div className="dark:bg-gray-700 dark:text-gray-200 w-32 border-2 bg-gray-200 z-10 top-[-40px] h-auto absolute invisible group-hover:visible text-xs">
                  {v.count} contributions on {v.date}
                </div>
              </div>
          );
        })}
      </section>
    </>
  );
};
