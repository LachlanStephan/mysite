import { FC, useState, useEffect } from "react";
import { format } from "date-fns";

interface Props {
	eventsTotal: any[];
}

interface CommitDiv {
	isCommit: boolean;
	date: string;
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
		};
		for (let j = 0; j < commits.length; j++) {
			if (boardDates[i] === formatCreatedAt(commits[j].created_at)) {
				if (commits[j].type === "PushEvent") {
					c.isCommit = true;
					c.date = boardDates[i];
				} else {
					c.isCommit = false;
					c.date = boardDates[i];
				}
			}
		}
		board.push(c);
	}

	return (
		<>
			<h1>Github: Last 30 days</h1>
			<br />
			<div className="grid gap-1 grid-flow-col grid-cols-auto grid-rows-6 h-auto w-auto">
				{board.map((v: any, i: number) => {
					return (
						<div
							id={v.date}
							key={i}
							className={
								v.isCommit
									? "w-3 h-3 bg-green-400 rounded-sm"
									: "w-3 h-3 bg-gray-700 rounded-sm"
							}
						></div>
					);
				})}
			</div>
		</>
	);
};
