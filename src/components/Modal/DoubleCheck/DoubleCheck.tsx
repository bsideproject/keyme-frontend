import React from "react";

import BaseButton from "~components/BaseButton/BaseButton";
import CancleButton from "~components/BaseButton/CancleButton";

import { ModalBox, ModalButtonBox, ModalContainer, ModalText } from "./DoubleCheck.styles";

interface cProps {
  setShowModal: (param: boolean) => void;
}

function DoubleCheck({ setShowModal }: cProps) {
  return (
    <ModalContainer>
      <ModalBox>
        <ModalText>
          진행 중인 OKR을 <br /> 정말 삭제하시겠어요?
        </ModalText>

        <ModalButtonBox>
          <CancleButton isAble={true} text={"취소"} handleClick={() => setShowModal(false)} />
          <BaseButton isAble={true} text={"삭제"} handleClick={() => setShowModal(false)} />
        </ModalButtonBox>
      </ModalBox>
    </ModalContainer>
  );
}

export default DoubleCheck;
