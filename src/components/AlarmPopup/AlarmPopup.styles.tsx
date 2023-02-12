import styled from "styled-components";
/* 공통된 modal Container 스타일 컴포넌트 만들어두는게 좋을듯 (센터), 
OKR 생성 모달도 동일하게 적용할 수 있도록 */

export const AlarmPopupModal = styled.div`
  width: 100%;
  max-width: 393px;
  height: 100%;
  /* anim */
  background-color: rgba(0, 0, 0, 0.75);
  /* fixed center */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  z-index: 9999;
`;

export const AlarmContainer = styled.div`
  flex: 1;
  background-color: white;
  margin: 1rem;
  border-radius: 20px;
  padding: 2rem 1rem;
`;

/* 이건 공통적으로 사용할 수 있을 것 같음 마진이나 폰트사이즈 등은 세부 조정하는 식으로.. */
export const AlarmExplain = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  line-height: 36px;
`;

export const BtnBox = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`;

const PopupBtn = styled.button`
  flex: 0 0 48%;
  height: 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  justify-content: center;
  border: none;
`;

export const BtnOk = styled(PopupBtn)`
  background-color: #335bf0;
  color: white;
`;

export const BtnNo = styled(PopupBtn)`
  background-color: #f8f8f8;
  color: #707070;
`;
