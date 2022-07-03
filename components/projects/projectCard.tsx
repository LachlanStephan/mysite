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
    const req: any = await octokit.request("GET /repos/{owner}/{repo}/readme", {
      owner: owner,
      repo: repo,
    });
    const res = await req.data;
    return await res;
  };

  return (
    <>
      <div className="w-full rounded-2 border-l-2 border-gray-300 my-2 min-h-32 h-auto w-full flex flex-col my-4 p-2 justify-between">
        <div className="flex justify-between">
          Repo: {Props.name}
          <a href={Props.html_url} target="_blank">
            <FaExternalLinkSquareAlt />
          </a>
        </div>
        <div>Language: {Props.language}</div>
        <div className="flex justify-between">
          Desc: {Props.desc}
          <span className="m-1 p-1 cursor-pointer" onClick={() => Props.showInfo(getReadme(Props.name))}>
            <FaInfoCircle /> 
          </span>
        </div>
      </div>
    </>
  );
};
