import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Title from "../title";
import DropZone from "../dropzone";
import Infos from "./Infos";

const MainWrapper = styled.div`
  padding: 0 10px;
`;

const InfoWrapper = styled.div`
  margin: 56px 45px 87px;

  ${media.greaterThan("medium")`
    margin: 62px 87px;
  `}
`;

const Main = () => {
  return (
    <MainWrapper>
      <Title />
      <DropZone />
      <InfoWrapper>
        <Infos />
      </InfoWrapper>
    </MainWrapper>
  );
};

export default Main;
