import styled from "styled-components";

// 한번 더 분리
export const ModalContainer = styled.div`
  width: 100%;
  max-width: 393px;
  height: 100%;

  /* fixed center */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  display: flex;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalBox = styled.div`
  box-sizing: border-box;
  width: 90%;
  /* height: 250px; */
  background-color: white;
  margin: 0 auto;
  border-radius: 20px;
  padding: 2rem 1rem;
`;

export const ModalText = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
`;

export const ModalButtonBox = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1rem;
`;
