import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { request } from "@octokit/request";
import RepoDetail from "../components/RepoDetail";

const RepoPage = () => {
  const params = useParams();
  const userName = params.username;
  const repoName = params.repo;
  const [repoDetail, setRepoDetail] = useState(null);

  const getRepoDetail = async () => {
    try {
      const res = await request("GET /repos/{owner}/{repo}", {
        // headers: {
        //   authorization: GITHUB_AUTH,
        // },
        owner: userName,
        repo: repoName,
      });
      console.log(res);
      setRepoDetail(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRepoDetail();
  }, []);

  return (
    repoDetail && (
      <div className="repo-page">
        <h1>{repoDetail.full_name}</h1>
        <RepoDetail repoDetail={repoDetail} />
      </div>
    )
  );
};

export default RepoPage;
