import React, { useState } from "react";

import { ReactComponent as IconBack } from "~assets/icons/ico_back.svg";
import BaseButton from "~components/BaseButton/BaseButton";

import { OkrModalFooter } from "../Modal.styles";
import { OkrContainer, OkrModal, OkrModalHeader } from "../OkrCreate/OkrCreate.styles";

import OKR from "./OKR/OKR";

interface cProps {
  okrId: number;
  showModal: boolean;
  setShowModal: (param: boolean) => void;
}

function OkrUpdateModal({ okrId, showModal, setShowModal }: cProps) {
  const [modalAnim, setModalAnim] = useState<boolean>(true);

  const closeModal = () => {
    setModalAnim(false);
    setTimeout(() => {
      setShowModal(false);
      setModalAnim(true);
    }, 500);
  };

  return (
    <OkrModal anim={modalAnim} showModal={showModal}>
      <OkrContainer anim={modalAnim}>
        <OkrModalHeader>
          <div>
            <IconBack onClick={closeModal} />
          </div>
          <span style={{ flex: 2 }}>OKR 수정하기</span>
          <div></div>
        </OkrModalHeader>

        <OKR okrId={okrId} />

        <OkrModalFooter style={{ margin: "1rem" }}>
          <BaseButton isAble={true} handleClick={closeModal} text={"수정 완료"} />
        </OkrModalFooter>
      </OkrContainer>
    </OkrModal>
  );
}

export default OkrUpdateModal;
