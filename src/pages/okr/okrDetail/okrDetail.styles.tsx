import styled from "styled-components";

import { pickerHeight, rPickerHeight } from "~styles/anim";

import { OkrTitle } from "../okr.styles";

export const OkrKrs = styled.div``;

export const KrsBox = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export const KrsTitle = styled(OkrTitle)`
  & :last-child {
    font-weight: 400;
  }
`;

// 애니메이션 height는 다듬기
export const OkrDetailBox = styled.div<{ detailShow: boolean }>`
  margin: 1rem 1rem 0;
  overflow: hidden;
  max-height: ${({ detailShow }) => (detailShow ? "1000px" : "0")};
  animation: ${({ detailShow }) => (detailShow ? pickerHeight : rPickerHeight)} 0.25s ease-in-out;
`;

export const KrInputContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  & input {
    border: none;
    background-color: transparent;
    outline: none;
  }
`;

export const OkrTodos = styled.div<{ todoExists: boolean }>`
  display: ${({ todoExists }) => (todoExists ? "none" : "block")};

  & > hr {
    margin: 1rem 0;
  }
`;

export const TodoBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: "0.5rem";

  & > div {
    display: flex;
    gap: 1rem;
  }
`;

export const TodoBall = styled.div<{ isCompleted: boolean }>`
  border-radius: 50px;
  width: 16px;
  height: 16px;
  margin-bottom: 0.5rem;
  background-color: ${({ isCompleted }) => (isCompleted ? "#ff9494" : "#d9d9d9")};
`;
