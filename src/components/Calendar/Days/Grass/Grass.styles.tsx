import styled from "styled-components";

import { palette } from "~styles/palette";

export const GrassBox = styled.div`
  width: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2.5px;
`;

export const GrassBall = styled.div<{ colorIdx: number }>`
  flex-basis: 5px;
  height: 5px;
  border-radius: 20px;
  margin-bottom: 1px;
  background-color: ${(props) => palette.colors[props.colorIdx].main};
`;
