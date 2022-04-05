import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const RepoIntro = ({ repoIntro }) => {
  const ownerName = repoIntro.owner.login;
  const repoName = repoIntro.name;
  const language = repoIntro.language;
  const stars = repoIntro.stargazers_count;
  const forks = repoIntro.forks_count;
  const description = repoIntro.description;

  const internalLink = `/users/${ownerName}/repos/${repoName}`;
  const externalLink = repoIntro.html_url;

  return (
    <div className="repo-intro">
      <Grid container rowSpacing={1}>
        <Grid item xs={8}>
          <Link to={internalLink} style={{ fontSize: "2em" }}>
            {repoName}
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Button
            size="small"
            href={externalLink}
            target="_blank"
            style={{ float: "right" }}
          >
            <i className="fas fa-external-link-alt fa-2x"></i>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <p style={{ color: "gray" }}>{description}</p>
        </Grid>
        <Grid item xs={8} className="repo-intro-stat">
          <span>
            <i className="fa-regular fa-star"></i>
            {stars}
          </span>

          <span>
            <i className="fa-solid fa-code-fork"></i>
            {forks}
          </span>
          <span>{language}</span>
        </Grid>
        <Grid item xs={4}>
          <Button
            component={Link}
            to={internalLink}
            style={{ float: "right" }}
            variant="contained"
          >
            查看
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default RepoIntro;
