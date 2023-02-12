import styled from "styled-components";

import { palette } from "~styles/palette";

export const CompleteBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const CompleteHeader = styled.div<{ colorIdx: number }>`
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => palette.colors[props.colorIdx].main};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 15px;
`;

export const CompleteBody = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: white;
  padding: 1rem 1rem 0;
`;

export const CompleteList = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const TodoSymbol = styled.div<{ colorIdx: number }>`
  width: 7px;
  height: 7px;
  border-radius: 20px;
  background-color: ${(props) => palette.colors[props.colorIdx].main};
`;

export const TodoText = styled.div`
  font-size: 15px;
`;
