import React from "react";
import styled from "styled-components";
import { OCRResult } from "../../../interfaces/types";
import Result from "./Result";

const ResultsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface ResultsProps {
  results: OCRResult[];
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  const list: JSX.Element[] = [];

  results.map(r => {
    return list.push(<Result result={r} />);
  });

  return <ResultsWrapper>{list}</ResultsWrapper>;
};

export default Results;
