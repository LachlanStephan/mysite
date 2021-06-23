import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";

// Wrote this thinking there was an endpoint for all commits
const Commits = () => {
  const title = "Current project:";
  const owner = "LachlanStephan";
  const repo = "CryptoTracker";

  const ghubkey = process.env.REACT_APP_GHUB_KEY;

  const [curProject, setCurProject] = useState([]);

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
      <a className="hover:text-pink-400" href={curProject.homepage}>
        View site
      </a>
    </div>
  );
};

export default Commits;
