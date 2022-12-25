import styled, { css, keyframes } from "styled-components";

export const OkrContainer = styled.div`
  overflow-y: auto;
`;

export const OkrBox = styled.div`
  padding: 0.5rem 1rem;
  min-height: 120px;
  background-color: #f6f6f6;
  border-radius: 20px;
  margin-bottom: 1rem;
`;

export const OkrHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  height: 30px;
  align-items: center;
`;

export const OkrCategory = styled.div`
  flex: 4;
  background-color: #d9d9d9;
  border-radius: 10px;
  height: 100%;
  display: flex;
  padding-left: 1rem;
  justify-content: left;
  align-items: center;
  font-weight: 700;
`;

export const OkrDDay = styled.span`
  flex: 1;
  text-align: right;
`;

export const OkrTitle = styled.div`
  margin-top: 0.5rem;
  font-weight: 700;
`;

export const OkrKrs = styled.div``;

export const KrsBox = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: flex-start;
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
  margin-top: 0.5rem;
  display: flex;
  gap: 1rem;
`;

export const OkrStatusBox = styled.div`
  flex: auto;
  border-radius: 10px;
  background-color: #d9d9d9;
`;
export const OkrStatusFill = styled.div`
  border-radius: 10px;
`;

export const OkrDetailBtn = styled.div``;

export const OktBtnBox = styled.div`
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 60px;
`;

export const OktAddBtn = styled.button`
  margin: 1rem auto;
  width: 260px;
  height: 40px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: #d9d9d9;
  &:hover {
    background-color: #8f8f8f;
  }
`;

const ltranimation = keyframes`
  0% {
    left: 100%;
  }
  100% {
    left: 0;
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

export const OkrCreationBg = styled.div`
  animation: ${bganim} 0.5s ease-in-out;
`;

export const OkrModal = styled.div`
  animation: ${ltranimation} 0.5s ease-in-out;
`;
