import { keyframes } from "styled-components";

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

export const pickerHeight = keyframes`
  0% { 
    max-height: 0
  }
  100% {
    max-height: 291px
  }
`;
export const rPickerHeight = keyframes`
  0% { 
    max-height: 236px
  }
  100% {
    max-height: 0
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

export const bttanimation = keyframes`
  0% {
    top: 100%;
  }
  100% {
    top: 0;
  }
`;
export const ttbanimation = keyframes`
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
`;
