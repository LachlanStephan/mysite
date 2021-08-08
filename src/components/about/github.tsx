import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import { IconBaseProps } from "react-icons/lib";

interface Props {
  title: string;
  owner: string;
  repo: string;
  star: IconBaseProps;
}

const CurrProject: React.FC<Props> = ({ title, owner, repo, star }) => {
  const ghubkey = process.env.REACT_APP_GHUB_KEY;

  const [curProject, setCurProject] = useState<any>([]);

  const octokit = new Octokit({
    auth: ghubkey,
  });

  const ghubData = async () => {
    let response = await octokit.request("GET /repos/{owner}/{repo}", {
      owner: owner,
      repo: repo,
    });
    console.log(response);
    setCurProject(response.data);
  };

  useEffect(() => {
    ghubData();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-lg">{title}</h1>
      <p>{curProject.name}</p>
      <p>Primary language: {curProject.language}</p>
      <p className="flex">
        {star}: {curProject.stargazers_count}
      </p>
    </div>
  );
};

export default CurrProject;
