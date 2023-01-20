import styled from "styled-components";

import { palette } from "~styles/palette";

export const OkrContainer = styled.div`
  overflow-y: auto;
`;

export const HeaderSummary = styled.div<{ isShow: boolean }>`
  font-size: 20px;
  font-weight: 500;
  margin: 1rem 0;
  display: ${({ isShow }) => (isShow ? "block" : "none")};
`;

export const NoOkrBox = styled.div`
  height: 226px;
  padding: 1rem;
  color: #909090;
  background-color: #f8f8f8;
  border-radius: 10px;
  font-size: 18px;

  margin-top: 1rem;
`;

export const OkrBox = styled.div`
  padding: 0.5rem 0;
  background-color: #f6f8fe;
  border-radius: 20px;
  margin-bottom: 1rem;
  transition: 0.5s;
  overflow: hidden;
`;

export const OkrBoxHeader = styled.div`
  margin: 0 1rem;
  display: flex;
`;

export const HeaderLeftSide = styled.div`
  flex: 1;
`;

export const HeaderRightSide = styled.div`
  flex-basis: 60px;
  display: flex;
  justify-self: center;
  align-items: center;
`;

export const OkrCategoryHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.75rem;
  align-items: center;
`;

export const OkrCategory = styled.div<{ colorIndex: number }>`
  background-color: ${(props) => palette.colors[props.colorIndex].main};
  color: white;
  border-radius: 17px;
  padding: 0 0.75rem;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
`;

export const OkrDDay = styled.span`
  text-align: center;
  color: #707070;
  font-size: 16px;
  font-weight: bold;
`;

export const OkrContentBox = styled.div`
  margin: 0 1rem;
`;

export const OkrTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 16px;
  gap: 0.75rem;

  & :first-child {
    flex-basis: 20px;
  }

  & :last-child {
    width: 100%;
    font-weight: 600;
  }
`;

export const OkrFooter = styled.div`
  margin-top: 1rem;
  justify-content: center;
  display: flex;
  gap: 1rem;
`;

export const OkrDetailBtn = styled.div``;

export const OktBtnBox = styled.div`
  /* margin: 1rem auto 0; */
  position: sticky;
  bottom: 110px;
`;

export const OktAddBtn = styled.button`
  margin: 1rem auto;
  width: 100%;
  height: 60px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  font-weight: bold;
  font-size: 18px;
  color: white;
  background-color: ${palette.primary};
`;

export const Scoller = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #707070;
  font-size: 14px;
`;
