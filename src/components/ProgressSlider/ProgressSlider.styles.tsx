import styled from "styled-components";

import { palette } from "~styles/palette";

export const SliderText = styled.div<{ activeDrag: boolean; value: number; colorIndex: number }>`
  font-weight: bold;
  font-size: 16px;

  visibility: ${({ activeDrag }) => (activeDrag ? "visible" : "hidden")};
  margin-left: ${({ value }) => ((value / 100) * 87).toString() + "%"};
  color: ${({ colorIndex }) => palette.colors[colorIndex].main};
`;

export const SliderContainer = styled.div`
  @media (hover: hover) and (pointer: fine) {
    &:hover ${SliderText} {
      display: block;
    }
  }
`;

export const Slider = styled.div<{ activeDrag: boolean }>`
  height: 8px;
  border-radius: 10px;
  background-color: #d9d9d9;

  cursor: pointer;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      height: 12px;

      & > div {
        height: 12px;
      }
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
