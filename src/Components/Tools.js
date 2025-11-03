import React from "react";
import Circle from "./Charts/Circle";

const data = [
  {
    name: "Source Control",
    children: [
      {
        name: "git",
        loc: 14,
      },
      {
        name: "Mercurial",
        loc: 1,
      },
      {
        name: "SVN",
        loc: 0.5,
      },
    ],
  },
  {
    name: "Databases",
    children: [
      {
        name: "SQL Server",
        loc: 9,
      },
      {
        name: "Firebase",
        loc: 1,
      },
      {
        name: "Postgres",
        loc: 6,
      },
      {
        name: "Oracle",
        loc: 2,
      },
    ],
  },
  {
    name: "Build Tools",
    children: [
      {
        name: "Jenkins",
        loc: 7,
      },
      {
        name: "Azure",
        loc: 2,
      },
      {
        name: "Docker",
        loc: 2,
      },
      {
        name: "Vagrant",
        loc: 0.5,
      },
      {
        name: "GitHub",
        loc: 1,
      },
      {
        name: "GitLab",
        loc: 5,
      },
      {
        name: "Kubernetes",
        loc: 5,
      },
    ],
  },
  {
    name: "Issue Management",
    children: [
      {
        name: "GitHub",
        loc: 8,
      },
      {
        name: "Azure DevOps",
        loc: 2,
      },
      {
        name: "Jira",
        loc: 3,
      },
      {
        name: "GitLab",
        loc: 1.5,
      },
      {
        name: "Linear",
        loc: 3,
      },
    ],
  },
  {
    name: "Design Tools",
    children: [
      {
        name: "Figma",
        loc: 6,
      },
      {
        name: "Affinity",
        loc: 6,
      },
    ],
  },
];

const Tools = () => (
  <div className="tools-container">
    {data.map((item) => (
      <Circle data={item} />
    ))}
  </div>
);

export default Tools;
