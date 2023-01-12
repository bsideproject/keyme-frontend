import styled from "styled-components";

import { heightAnim, rHeightAnim } from "~styles/anim";
import { palette } from "~styles/palette";

import { BaseModal, ModalCategory } from "../Modal.styles";

export const CategoryModal = styled(BaseModal)`
  align-items: flex-end;
  /* 9999만 적용이 되네..? */
  z-index: 9999;
`;

export const CategoryContainer = styled.div<{ anim: boolean; showModal: boolean }>`
  flex: 1;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: ${(props) => (props.anim ? "90%" : "0")};
  animation: ${(props) => (props.anim ? heightAnim : rHeightAnim)} 0.5s ease-in-out;
`;

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #335bf0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 1rem;
`;

export const CategoryTitle = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: white;
`;

export const CategoryBody = styled.div`
  padding: 0 1rem;
`;

export const CategoryExplainMain = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #222222;
  margin-top: 2rem;
`;

export const CategoryExplainSub = styled.div`
  font-size: 14px;
  color: #707070;
  margin-top: 0.5rem;
`;

export const CategoryNameInput = styled.input`
  margin-top: 1rem;
  width: 100%;
  outline: none;
  height: 60px;
  border: none;
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 1rem;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: medium;
`;

export const CategoryColorBox = styled.div`
  margin-top: 1rem;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  background-color: #f8f8f8;
  border-radius: 10px;
`;

export const CategoryColorItem = styled.div<{ isChecked: boolean; bgColor: string }>`
  flex: 0 0 18%;
  height: 45px;
  border-radius: 12px;
  box-sizing: border-box;
  border: ${(props) => (props.isChecked ? "2px solid #222222;" : "none")};
  background-color: ${(props) => props.bgColor};
`;

// 카테고리 수정
export const ChangeCategory = styled(ModalCategory)`
  border: ${(props) => (props.isPicked ? "2px solid #707070" : "none")};
  background-color: ${(props) => palette.colors[props.colorIdx].sub};
  color: ${(props) => palette.colors[props.colorIdx].main};
`;
