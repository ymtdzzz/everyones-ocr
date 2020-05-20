import React, { useRef } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import NotificationSystem from "react-notification-system";
import copy from "copy-to-clipboard";
import { OCRResult } from "../../../interfaces/types";

import CheckBox from "../../shared/CheckBox";
import ClipboardSvg from "../../../assets/images/clipboard-regular.svg";
import Loader from "../../shared/Loader";

const ResultWrapper = styled.div`
  min-width: 90%;
  height: 33vh;
  text-align: center;
  margin: 0 5%;
  position: relative;

  ${media.greaterThan("small")`
    min-width: 0;
    width: 40%;
  `}

  ${media.greaterThan("large")`
    width: 30%;
    margin: 0 1.66%;
  `}
`;

const ImageContainer = styled.div`
  margin-bottom: 0.625rem;
  height: 50%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const TextArea = styled.div<{ loading: boolean }>`
  text-align: left;
  font-size: 0.6875rem;
  border: 1px solid #707070;
  border-radius: 3px;
  padding: 0.4375rem;
  position: relative;
  height: 30%;
  overflow: auto;

  svg {
    height: 20px;
    width: 20px;
    position: absolute;
    bottom: 0.4375rem;
    right: 0.4375rem;
    &:hover {
      color: #666;
    }
  }

  ${props =>
    props.loading
      ? `
    display: flex;
    align-items: center;
    justify-content: center;
  `
      : ""}
`;
const CheckBoxWrap = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
`;

export interface ResultProps {
  result: OCRResult;
}

const Result: React.FC<ResultProps> = ({ result }) => {
  const notificationSystem = useRef(null);
  // const [isSelected, setIsSelected] = useState(false);

  const style: NotificationSystem.Style = {
    NotificationItem: {
      info: {
        backgroundColor: "#2699FB",
        border: "none",
        color: "white",
        borderRadius: "5px"
      }
    }
  };

  const addNotification = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    copy(result.result);
    let notification: NotificationSystem.System;
    if (notificationSystem.current !== null) {
      notification = notificationSystem.current!;
      if (notification !== null) {
        notification.addNotification({
          message: "Copied!",
          level: "info",
          position: "br",
          dismissible: false
        });
      }
    }
  };

  return (
    <ResultWrapper>
      <CheckBoxWrap>
        <CheckBox />
      </CheckBoxWrap>
      <ImageContainer>
        <img src={result.filepath} alt="input thumbnail" />
      </ImageContainer>
      <TextArea loading={result.isLoading}>
        {result.isLoading ? <Loader /> : result.result}
        <ClipboardSvg onClick={addNotification} />
        <NotificationSystem ref={notificationSystem} style={style} />
      </TextArea>
    </ResultWrapper>
  );
};

export default Result;
