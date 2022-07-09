import { FC } from "react";
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
    <div
      onClick={() => Props.showInfo(getReadme(Props.name))}
      className="cursor-pointer transition ease-in hover:delay-100 hover:bg-black hover:text-white w-4/5 p-2 m-l-2 rounded-2 border-l-2 border-gray-300 flex flex-col my-4 dark:hover:bg-white dark:hover:text-black rounded-sm justify-between"
    >
    <div>
      Repo: {Props.name}
      <div>Language: {Props.language}</div>
      <div className="">Desc: {Props.desc}</div>
    </div>
      <div className="w-full flex">
        <a href={Props.html_url} target="_blank">
          <FaExternalLinkSquareAlt />
        </a>
      </div>
    </div>
  );
};
