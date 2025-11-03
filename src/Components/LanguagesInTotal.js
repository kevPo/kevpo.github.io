import React from "react";
import Bar from "./Charts/Bar";

const data = [
  {
    language: "Powershell",
    years: 1,
  },
  {
    language: "Java",
    years: 2,
  },
  {
    language: "Python",
    years: 2,
  },
  {
    language: "Ruby",
    years: 2,
  },
  {
    language: "Elixir",
    years: 5,
  },
  {
    language: "C#",
    years: 9,
  },
  {
    language: "JavaScript",
    years: 13,
  },
  {
    language: "SQL",
    years: 14,
  },
  {
    language: "HTML/CSS",
    years: 14,
  },
];

const LanguagesInTotal = () => <Bar data={data} />;

export default LanguagesInTotal;
