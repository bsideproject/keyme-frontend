import React from "react";

// container 형식으로 children 넣기
import { BaseModal } from "./Modal.styles";

interface Props {
  modalAnim: boolean;
  showModal: boolean;
  children: React.ReactNode;
}

function Modal({ modalAnim, showModal, children }: Props) {
  return (
    <BaseModal anim={modalAnim} showModal={showModal}>
      {children}
    </BaseModal>
  );
}

export default Modal;
