import styled from "styled-components";

import { bganim, revbganim } from "~styles/anim";

// 한번 더 분리
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
  display: ${(props) => (props.showModal ? "flex" : "flex")};
`;

export const OkrModalFooter = styled.div`
  margin-top: 1rem;
`;

export const ModalCategory = styled.div<{ colorIdx: number; isPicked: boolean }>`
  flex: 0 0 30%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
  font-weight: bold;
`;

export const ModalCategoryBox = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
