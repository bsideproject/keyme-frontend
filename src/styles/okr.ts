import styled from "styled-components";

// dark 모드 시 변경가능하도록 수정필요
import { light } from "./theme";

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

import { palette } from "./palette";
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

export const OkrTitle = styled.div<{ colorIndex: number }>`
  display: flex;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 16px;
  gap: 0.5rem;

  & :first-child {
    flex-basis: 14px;
    color: ${(props) => palette.colors[props.colorIndex].main};
  }

  & :last-child {
    width: 100%;
    font-weight: 600;
  }
`;

export const OkrKrs = styled.div``;

export const KrsBox = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export const KrsCircle = styled.div`
  border-radius: 50px;
  width: 16px;
  height: 16px;
  background-color: #d9d9d9;
`;

export const KrsTitle = styled(OkrTitle)`
  & :last-child {
    font-weight: 400;
  }
`;

export const OkrFooter = styled.div`
  margin-top: 1rem;
  justify-content: center;
  display: flex;
  gap: 1rem;
`;

export const OkrStatusBox = styled.div`
  margin-top: 1rem;
  height: 18px;
  border-radius: 10px;
  background-color: #d9d9d9;
`;

export const OkrDetailStatusBox = styled(OkrStatusBox)`
  margin-top: 0;
`;
export const OkrStatusFill = styled.div<{ colorIndex: number }>`
  border-radius: 10px;
  height: 18px;
  background-color: ${(props) => palette.colors[props.colorIndex].main};
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
  font-weight: 700;
  font-size: 18px;
  color: white;
  background-color: ${light.primary};
`;

////////////////////////////////////
// Okr Modal

export const OkrModalBody = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 1rem;
`;

export const OkrModalCategoryHeader = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OkrModalHeaderText = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #222222;
`;

export const OkrModalCategoryHeaderSetting = styled.div``;

export const OkrCategoryBox = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ModalCategory = styled.div<{ colorIdx: number; isPicked: boolean }>`
  flex: 0 0 30%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
  font-weight: bold;
`;

// Objective 생성
export const OkrCreateCategory = styled(ModalCategory)`
  background-color: ${(props) => (props.isPicked ? palette.colors[props.colorIdx].sub : "#F8F8F8")};
  color: ${(props) => (props.isPicked ? palette.colors[props.colorIdx].main : "#909090")};
`;

// 카테고리 수정
export const ChangeCategory = styled(ModalCategory)`
  border: ${(props) => (props.isPicked ? "2px solid #707070" : "none")};
  background-color: ${(props) => palette.colors[props.colorIdx].sub};
  color: ${(props) => palette.colors[props.colorIdx].main};
`;

export const OkrObjectiveBox = styled.div`
  margin-top: 1rem;
  & textarea {
    border: 0;
    height: 160px;
    background-color: #f8f8f8;
    border-radius: 10px;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    resize: none;
  }
`;

export const OkrModalFooter = styled.div`
  margin-top: 1rem;
`;
