import styled, { keyframes } from "styled-components";

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

export const BaseModal = styled.div<{ anim: boolean; showModal: boolean }>`
  width: 100%;
  max-width: 393px;
  height: 100%;

  /* fixed center */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  background-color: rgba(0, 0, 0, 0.75);

  animation: ${(props) => (props.anim ? bganim : revbganim)} 0.5s ease-in-out;
  display: ${(props) => (props.showModal ? "flex" : "none")};
`;

// create modal
export const OkrModal = styled(BaseModal)<{ showModal: boolean }>`
  overflow: hidden;
`;

export const OkrContainer = styled.div<{ anim: boolean }>`
  position: absolute;
  width: 100%;
  max-width: 393px;
  height: 100%;
  background-color: white;
  animation: ${(props) => (props.anim ? ltranimation : rtlanimation)} 0.5s ease-in-out;
  overflow-y: auto;
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

// category modal
export const CategoryModal = styled(BaseModal)<{ showModal: boolean }>`
  align-items: flex-end;
  /* 9999만 적용이 되네..? */
  z-index: 9999;
`;

const heightAnim = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 90%;
  }
`;
const rHeightAnim = keyframes`
  0% {
    height: 90%;
  }
  100% {
    height: 0;
  }
`;

// anim 용으로 변수 나눠야할듯? 일단 나올때도 안되는건 좀
export const CategoryContainer = styled.div<{ showModal: boolean }>`
  flex: 1;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* anim 이후에 0으로 */
  height: ${(props) => (props.showModal ? "90%" : "0")};
  /* height anim */
  animation: ${(props) => (props.showModal ? heightAnim : rHeightAnim)} 0.5s ease-in-out;
`;

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #335bf0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 1rem;
`;

export const CategoryTitle = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: white;
`;

export const CategoryBody = styled.div`
  padding: 0 1rem;
`;

export const CategoryExplainMain = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #222222;
  margin-top: 2rem;
`;

export const CategoryExplainSub = styled.div`
  font-size: 14px;
  color: #707070;
  margin-top: 0.5rem;
`;

export const CategoryColorBox = styled.div`
  margin-top: 1rem;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  background-color: #f8f8f8;
  border-radius: 10px;
`;

export const CategoryColorItem = styled.div<{ isChecked: boolean; bgColor: string }>`
  flex: 0 0 18%;
  height: 45px;
  border-radius: 12px;
  box-sizing: border-box;
  border: ${(props) => (props.isChecked ? "2px solid #222222;" : "none")};
  background-color: ${(props) => props.bgColor};
`;

// info modal
export const InfoModal = styled(BaseModal)<{ showModal: boolean }>`
  display: ${(props) => (props.showModal ? "flex" : "none")};
  align-items: center;
  z-index: 9999;
`;

export const InfoContainer = styled.div`
  margin: 0 1rem;
  flex: 1;
  background-color: white;
  border-radius: 20px;
  padding: 1rem;
`;

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

export const InfoHeaderTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;
