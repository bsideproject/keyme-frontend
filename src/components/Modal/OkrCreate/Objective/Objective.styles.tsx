import styled from "styled-components";

import { ModalCategory } from "~components/Modal/Modal.styles";
import { palette } from "~styles/palette";

export const OkrModalBody = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 1rem;
`;

export const ObjectiveHeader = styled.div`
  display: flex;
  gap: 0.25rem;

  align-items: center;

  & span {
    font-size: 20px;
  }
`;

export const OkrModalCategoryHeader = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Objective 생성
export const OkrCreateCategory = styled(ModalCategory)`
  background-color: ${(props) => (props.isPicked ? palette.colors[props.colorIdx].sub : "#F8F8F8")};
  color: ${(props) => (props.isPicked ? palette.colors[props.colorIdx].main : "#909090")};
`;
