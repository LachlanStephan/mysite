import { FC, useState, useEffect } from "react";
import { format } from "date-fns";

interface Props {
	eventsTotal: any[];
}

export const CommitBoard: FC<Props> = (Props) => {
	const commits = Props.eventsTotal;
	let boardArray: string[] = [];

	const formatCreatedAt = (created_at: string): string => {
		const splitDate: string[] = created_at.split("-");
		const year: string = splitDate[0];
		const month: string = splitDate[1];
		const day: string = splitDate[2].substring(0, 2);
		return year + "-" + month + "-" + day;
	};

	let count: number = 30;
	const d: Date = new Date();
	for (let i = 0; i < 30; i++) {
		boardArray.push(
			format(new Date().setDate(d.getDate() - count), "yyyy-MM-dd")
		);
		count = count - 1;
	}

	for (let i = 0; i < commits.length; i++) {
		for (let j = 0; j < boardArray.length; j++) {
			let x = formatCreatedAt(commits[i].created_at);
			if (boardArray[j] == x && commits[i].type == "PushEvent") {
				const el: HTMLElement | null = document.getElementById(
					boardArray[j]
				);
				if (el != null) {
					el.style.backgroundColor = "green";
				}
			}
		}
	}
	return (
		<>
			<h1 className="font-bold">Github: Last 30 days</h1>
			<br />
			<div className="grid gap-1 grid-rows-5 grid-cols-6  h-auto w-auto">
				{boardArray.map((v: string, i: number) => {
					return (
						<div
							key={i}
							id={v}
							className="w-3 h-3 bg-black rounded-sm"
						></div>
					);
				})}
			</div>
		</>
	);
};
