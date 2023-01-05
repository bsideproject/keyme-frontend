import React from "react";

import { AlarmContainer, AlarmExplain, AlarmPopupModal, BtnBox, BtnNo, BtnOk } from "@styles/popup";

interface cProps {
  showModal: boolean;
  setShowModal: (param: boolean) => void;
  setState: (param: boolean) => void;
}

function AlarmPopup({ showModal, setShowModal, setState }: cProps) {
  // 타이틀, 버튼 안 텍스트 전달받기
  return (
    <AlarmPopupModal style={{ display: showModal ? "flex" : "none" }}>
      <AlarmContainer>
        <AlarmExplain>Objective가 생성되었습니다. Key result로 바로 연결할까요?</AlarmExplain>
        <BtnBox>
          <BtnNo onClick={() => setState(false)}>저장</BtnNo>
          <BtnOk onClick={() => setState(true)}>Key result 만들기</BtnOk>
        </BtnBox>
      </AlarmContainer>
    </AlarmPopupModal>
  );
}

export default AlarmPopup;
