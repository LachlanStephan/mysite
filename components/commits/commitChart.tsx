import { FC, useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import { CommitBoard } from "./commitBoard";

// add interface for resp
interface eventData {
	actor: {};
	created_at: string;
	id: string;
	payload: {};
	public: boolean;
	repo: {};
	type: string;
}

export const CommitChart: FC = () => {
	const key = process.env.GBHUBKEY;
	const [eData, setEdata] = useState<eventData[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const octokit = new Octokit({
		auth: key,
	});

	const getData = async () => {
		setLoading(true);
		const req: any = await octokit.request(
			"GET /users/{username}/events?per_page=100",
			{
				username: "LachlanStephan",
			}
		);
		setEdata(await req.data);
		setLoading(false);
	};

	useEffect(() => {
		getData();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			{loading ? (
				<div>Loading...</div>
			) : (
				<CommitBoard eventsTotal={eData} />
			)}
		</>
	);
};
