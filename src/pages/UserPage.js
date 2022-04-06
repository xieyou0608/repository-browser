import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { request } from "@octokit/request";
import RepoIntro from "../components/RepoIntro";
import { v4 } from "uuid";

const UserPage = () => {
  const params = useParams();
  const userName = params.username;
  const [repoList, setRepoList] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [isBottom, setIsBottom] = useState(false);

  window.onscroll = function () {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      setIsBottom(true);
      console.log("more repos.");
    }
  };

  const getUserRepos = async () => {
    try {
      const res = await request("GET /users/{username}/repos", {
        headers: {
          authorization: process.env.REACT_APP_API_AUTH,
        },
        username: userName,
        per_page: 10,
        page: curPage,
      });
      console.log(res);
      setRepoList([...repoList, ...res.data]);
      setIsBottom(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserRepos();
  }, [curPage]);

  useEffect(() => {
    if (isBottom) {
      if (repoList.length >= curPage * 10) {
        setCurPage(curPage + 1);
      }
    }
  }, [isBottom]);

  return (
    <div className="user-page">
      <h1>{userName}</h1>
      {repoList &&
        repoList.map((repoIntro) => {
          return <RepoIntro key={v4()} repoIntro={repoIntro} />;
        })}
    </div>
  );
};

export default UserPage;
