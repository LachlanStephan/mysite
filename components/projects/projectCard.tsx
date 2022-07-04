import { FC, useState, useEffect } from "react";
import { FaExternalLinkSquareAlt, FaInfoCircle } from "react-icons/fa";
import { Octokit } from "@octokit/core";

interface Props {
	html_url: string;
	language: string;
	desc: string;
	name: string;
	id: number;
	showInfo: Function;
}

export const ProjectCard: FC<Props> = (Props) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [err, setErr] = useState<boolean>(false);
	const [showInfo, setShowInfo] = useState<boolean>(true);

	const key = process.env.GBHUBKEY;
	const owner = "LachlanStephan";

	const octokit = new Octokit({
		auth: key,
	});

	const getReadme = async (repo: string): Promise<any> => {
		const req: any = await octokit.request(
			"GET /repos/{owner}/{repo}/readme",
			{
				owner: owner,
				repo: repo,
			}
		);
		const res = await req.data;
		return await res;
	};

	return (
		<div className="w-full p-2 rounded-2 border-l-2 border-gray-300 flex flex-col my-4 justify-between">
			Repo: {Props.name}
			<div>Language: {Props.language}</div>
			<div className="">Desc: {Props.desc}</div>
			<div className="w-full flex">
				<a href={Props.html_url} target="_blank">
					<FaExternalLinkSquareAlt />
				</a>
				<span
					className="m-1 p-1 cursor-pointer"
					onClick={() => Props.showInfo(getReadme(Props.name))}
				>
					<FaInfoCircle />
				</span>
			</div>
		</div>
	);
};
