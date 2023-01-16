import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 393px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 9999;
  backdrop-filter: blur(10px);
  overflow-y: hidden;
  background: rgba(44, 42, 51, 0.5);
  .modal-background {
    position: absolute;
    width: 100%;
    height: 100%;
    //background-color: rgba(44, 42, 51, 0.5);
  }
`;

interface Props {
  children: React.ReactNode;
}

const useModal = () => {
  const [modal, setModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<Element | null>(null);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const ModalPortal = ({ children }: Props) => {
    useEffect(() => {
      setMounted(true);
      if (document) {
        const dom = document.getElementById("modal");
        ref.current = dom;
      }
      return () => {
        setMounted(false);
      };
    }, []);

    if (ref.current && mounted && modal) {
      return createPortal(
        <Container>
          <div className="modal-background" role="presentation" />
          {children}
        </Container>,
        ref.current
      );
    }
    return null;
  };

  return {
    openModal,
    closeModal,
    ModalPortal,
  };
};

export default useModal;
