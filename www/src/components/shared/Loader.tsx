import React from "react";
import styled from "styled-components";

const LoaderWrap = styled.div`
  /* https://epic-spinners.epicmax.co/ */
  .hollow-dots-spinner,
  .hollow-dots-spinner * {
    box-sizing: border-box;
  }

  .hollow-dots-spinner {
    height: 7.5px;
    width: calc(15px * 3);
    margin: 0 auto;
  }

  .hollow-dots-spinner .dot {
    width: 7.5px;
    height: 7.5px;
    margin: 0 calc(7.5px / 2);
    border: calc(7.5px / 5) solid black;
    border-radius: 50%;
    float: left;
    transform: scale(0);
    animation: hollow-dots-spinner-animation 1000ms ease infinite 0ms;
  }

  .hollow-dots-spinner .dot:nth-child(1) {
    animation-delay: calc(300ms * 1);
  }

  .hollow-dots-spinner .dot:nth-child(2) {
    animation-delay: calc(300ms * 2);
  }

  .hollow-dots-spinner .dot:nth-child(3) {
    animation-delay: calc(300ms * 3);
  }

  @keyframes hollow-dots-spinner-animation {
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Loader = () => {
  return (
    <LoaderWrap>
      <div className="hollow-dots-spinner">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
    </LoaderWrap>
  );
};

export default Loader;
