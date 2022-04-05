import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { v4 } from "uuid";

const RepoDetail = ({ repoDetail }) => {
  const repoName = repoDetail.name;
  const description = repoDetail.description;
  const stars = repoDetail.stargazers_count;
  const forks = repoDetail.forks_count;
  const watcher = repoDetail.watchers_count;

  const website = repoDetail.homepage;
  const topics = repoDetail.topics;
  const lastUpdate = repoDetail.updated_at;
  const externalLink = repoDetail.html_url;

  return (
    <div className="repo-detail">
      <h1 style={{ margin: "0.2em", display: "inline-block" }}>{repoName}</h1>
      <Button
        size="small"
        href={externalLink}
        target="_blank"
        style={{ float: "right" }}
      >
        <Box sx={{ mr: 1 }}>
          <p>Link to GitHub</p>
        </Box>
        <i className="fas fa-external-link-alt fa-2x"></i>
      </Button>

      {website && (
        <Button size="small" href={website} target="_blank">
          官方網站
        </Button>
      )}

      {topics.length ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            m: 2,
          }}
        >
          {topics.map((topic) => {
            return (
              <Box key={v4()} sx={{ m: 0.5 }}>
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  href={`https://github.com/topics/${topic}`}
                  target="_blank"
                >
                  {topic}
                </Button>
              </Box>
            );
          })}
        </Box>
      ) : null}

      <table>
        <tbody>
          <tr>
            <td>
              <i className="fa-regular fa-star"></i>
            </td>
            <td>{stars} stars</td>
          </tr>
          <tr>
            <td>
              <i className="fa-solid fa-eye"></i>
            </td>
            <td>{watcher} watching</td>
          </tr>
          <tr>
            <td>
              <i className="fa-solid fa-code-fork"></i>
            </td>
            <td>{forks} forks</td>
          </tr>
        </tbody>
      </table>

      <h4>Description</h4>
      <p>{description}</p>
      <p style={{ float: "right" }}>
        Last update: {lastUpdate.replace(/T.*/, "")}
      </p>
    </div>
  );
};
export default RepoDetail;
