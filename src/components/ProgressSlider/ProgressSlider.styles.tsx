import styled from "styled-components";

import { palette } from "~styles/palette";

export const Slider = styled.div<{ activeDrag: boolean }>`
  height: 8px;
  border-radius: 10px;
  background-color: #d9d9d9;

  cursor: pointer;

  &:hover {
    height: 12px;

    & > div {
      height: 12px;
    }
  }

  /* 확장 anim 추가 */
  height: ${({ activeDrag }) => (activeDrag ? "12px" : "8px")};
`;

export const SliderFill = styled(Slider)<{ value: number; colorIndex: number }>`
  width: ${({ value }) => value.toString() + "%"};
  background-color: ${({ colorIndex }) => palette.colors[colorIndex].main};
  height: ${({ activeDrag }) => (activeDrag ? "12px" : "8px")};
`;
