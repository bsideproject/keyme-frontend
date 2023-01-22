import styled from "styled-components";

import { palette } from "./palette";

const opacity = {
  background: "rgba(51, 91, 240, 0.2)",
};

export const BaseBtn = styled.button<{ isAble: boolean }>`
  border-radius: 10px;
  margin: 0 auto 1rem;
  border: none;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.isAble ? "#335bf0" : opacity.background)};
  font-size: 18px;
  color: white;
  font-weight: bold;
`;

export const KrAddBtn = styled(BaseBtn)`
  display: ${(props) => (props.isAble ? "flex" : "none")};
  color: #335bf0;
  align-items: center;
  background-color: #f8f8f8;
`;

export const BaseBoxContainer = styled.div<{ colorIdx: number | undefined }>`
  border-radius: 10px;
  background-color: ${({ colorIdx }) => (colorIdx ? palette.colors[colorIdx].sub : "")};
  padding: 1rem;
  margin-top: 1rem;
`;

export const BaseBoxHeader = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #707070;
`;

export const BaseBoxBody = styled.div`
  margin-top: 1rem;
`;

export const BaseBoxItem = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ItemBadge = styled.div<{ colorIdx: number | undefined }>`
  border-radius: 17px;
  height: 30px;
  font-weight: bold;
  background-color: ${({ colorIdx }) => (colorIdx ? palette.colors[colorIdx].main : "")};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &.circle {
    flex-basis: 30px;
  }

  &.text {
    height: 34px;
    width: fit-content;
    padding: 0 0.75rem;
  }
`;

export const ItemText = styled.div`
  flex: 1;
  font-size: 15px;
  color: #222;
`;

export const HeaderBox = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  align-items: center;
`;

export const HeaderUser = styled.div`
  font-weight: 700;
  font-size: 24px;
`;
