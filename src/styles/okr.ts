import styled, { keyframes } from "styled-components";

// useTheme()으로 가져오는게 맞을듯?
import { light } from "./theme";

export const OkrContainer = styled.div`
  overflow-y: auto;
`;

export const OkrBox = styled.div`
  padding: 0.5rem 0;
  /* min-height: 120px; */
  background-color: #f0f0f0;
  border-radius: 20px;
  margin-bottom: 1rem;
  transition: 0.5s;
  overflow: hidden;
`;

export const OkrHeader = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
`;

export const OkrCategoryHeader = styled.div`
  margin: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const categoryBackgroundColor = ["#F2FAFE", "#FEF6F2", "#FDEFF1", "#F1FEF3", "#EDFEFE", "#FEF4FF"];
const categoryTextColor = ["#4284E8", "#F08538", "#EE4E6E", "#71E07C", "#4CD2D3", "#CA82EC"];

export const OkrCategory = styled.div<{ colorIndex: number }>`
  background-color: ${(props) => categoryBackgroundColor[props.colorIndex]};
  color: ${(props) => categoryTextColor[props.colorIndex]};
  border-radius: 10px;
  width: 86px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`;

export const OkrDDay = styled.span`
  text-align: center;
`;

export const OkrContentBox = styled.div`
  margin: 0 1rem;
`;

export const OkrTitle = styled.div`
  margin-top: 1rem;
  font-weight: 700;
`;

export const OkrKrs = styled.div``;

export const KrsBox = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const KrsCircle = styled.div`
  border-radius: 50px;
  width: 16px;
  height: 16px;
  background-color: #d9d9d9;
`;

export const KrsTitle = styled.span``;

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
export const OkrStatusFill = styled.div`
  border-radius: 10px;
  height: 18px;
`;

export const OkrDetailBtn = styled.div``;

export const OktBtnBox = styled.div`
  /* margin: 1rem auto 0; */
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

const ltranimation = keyframes`
  0% {
    right: 100%;
  }
  100% {
    right: 0;
  }
`;
const rtlanimation = keyframes`
  0% {
    right: 0;
  }
  100% {
    right: 100%;
  }
`;

export const bganim = keyframes`
  0% {
    background-color: rgba(0, 0, 0, 0);
  }
  100% {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;
export const revbganim = keyframes`
  0% {
    background-color: rgba(0, 0, 0, 0.25);
  }
  100% {
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const OkrCreationBg = styled.div<{ anim: boolean; display: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => props.display};
  animation: ${(props) => (props.anim ? bganim : revbganim)} 0.5s ease-in-out;
  z-index: 500;
`;

export const OkrAnimContainer = styled.div`
  position: relative;
  max-width: 393px;
  height: 100%;
  overflow: hidden;
  z-index: 9999;
  margin: 0 auto;
`;

export const OkrModal = styled.div<{ anim: boolean }>`
  position: absolute;
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: ${(props) => (props.anim ? ltranimation : rtlanimation)} 0.5s ease-in-out;
`;

export const OkrModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #efefef;
  & > * {
    flex: 1;
  }
  & span {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
  }
`;

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

export const OkrModalCategory = styled.div<{ colorIndex: number; isPicked: boolean }>`
  flex: 0 0 30%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid gray; */
  border-radius: 10px;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
  font-weight: bold;
  background-color: ${(props) =>
    props.isPicked ? categoryBackgroundColor[props.colorIndex] : "#F8F8F8"};
  color: ${(props) => (props.isPicked ? categoryTextColor[props.colorIndex] : "#909090")};
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
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 100px;
  padding: 1rem;
  box-sizing: border-box;
`;

const opacity = {
  background: "rgba(51, 91, 240, 0.2)",
};

export const OkrBtnCreate = styled.button<{ isAble: boolean }>`
  /* basebtn으로 분리하고 상속 */
  border-radius: 10px;
  margin: 0 auto;
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

export const OkrBtnSkip = styled.div`
  color: #707070;
  text-align: center;
  margin-top: 1rem;
`;
