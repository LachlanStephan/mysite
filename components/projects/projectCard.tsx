import { FC, useState } from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Octokit } from "@octokit/core";
import Loader from "../loader";

interface Props {
  html_url: string;
  language: string;
  desc: string;
  name: string;
  id: number;
  showInfo: Function;
}

export const ProjectCard: FC<Props> = (Props) => {
  const [loading, setLoading] = useState(false);

  const key = process.env.GBHUBKEY;
  const owner = "LachlanStephan";

  const octokit = new Octokit({
    auth: key,
  });

  const getReadme = async (repo: string): Promise<any> => {
    setLoading(true);
    const req: any = await octokit.request("GET /repos/{owner}/{repo}/readme", {
      owner: owner,
      repo: repo,
    });
    const res = await req.data;
    setLoading(false);
    return await res;
  };

  return (
    <>
      {loading ? (
        <span className="h-[10rem] p-4 my-2 m-l-2">
          <Loader loading_text="Loading..." />
        </span>
      ) : (
        <div
          onClick={() => Props.showInfo(getReadme(Props.name))}
          className="min-h-[10rem] border-2 rounded-md p-4 cursor-pointer w-full md:w-4/5 my-2 m-l-2 rounded-lg border-accent_grey flex flex-col justify-between hover:opacity-60"
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
      )}
    </>
  );
};
