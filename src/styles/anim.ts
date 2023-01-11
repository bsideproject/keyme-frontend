import styled, { keyframes } from "styled-components";

export const heightAnim = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 90%;
  }
`;

export const rHeightAnim = keyframes`
  0% {
    height: 90%;
  }
  100% {
    height: 0;
  }
`;

export const bganim = keyframes`
  0% {
    background-color: rgba(0, 0, 0, 0);
  }
  100% {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;
export const revbganim = keyframes`
  0% {
    background-color: rgba(0, 0, 0, 0.75);
  }
  100% {
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const ltranimation = keyframes`
  0% {
    right: 100%;
  }
  100% {
    right: 0;
  }
`;
export const rtlanimation = keyframes`
  0% {
    right: 0;
  }
  100% {
    right: 100%;
  }
`;
