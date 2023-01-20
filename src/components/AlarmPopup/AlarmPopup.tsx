import React from "react";

import {
  AlarmContainer,
  AlarmExplain,
  AlarmPopupModal,
  BtnBox,
  BtnNo,
  BtnOk,
} from "./AlarmPopup.styles";

interface cProps {
  showModal: boolean;
  setState: (param: number) => void;
}

function AlarmPopup({ showModal, setState }: cProps) {
  // 타이틀, 버튼 안 텍스트 전달받기
  return (
    <AlarmPopupModal style={{ display: showModal ? "flex" : "none" }}>
      <AlarmContainer>
        <AlarmExplain>
          Objective가 생성되었습니다. <br /> Key result로 바로 연결할까요?
        </AlarmExplain>
        <BtnBox>
          <BtnNo onClick={() => setState(1)}>저장</BtnNo>
          <BtnOk onClick={() => setState(2)}>Key result 만들기</BtnOk>
        </BtnBox>
      </AlarmContainer>
    </AlarmPopupModal>
  );
}

export default AlarmPopup;
