import styled from "styled-components";

import { ltranimation, rtlanimation } from "~styles/anim";

import { BaseModal } from "../Modal.styles";

// create modal
export const OkrModal = styled(BaseModal)`
  overflow: hidden;
`;

export const OkrContainer = styled.div<{ anim: boolean }>`
  position: absolute;
  width: 100%;
  max-width: 393px;
  height: 100%;
  background-color: white;
  animation: ${(props) => (props.anim ? ltranimation : rtlanimation)} 0.5s ease-in-out;
  overflow-y: auto;
`;

export const OkrModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #efefef;
  & > * {
    flex: 1;
  }
  & span {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
  }
`;

export const OkrModalHeaderText = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #222222;
`;

export const OkrObjectiveBox = styled.div`
  margin-top: 1rem;
  & textarea {
    border: 0;
    height: 160px;
    background-color: #f8f8f8;
    border-radius: 10px;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    resize: none;
  }
`;
