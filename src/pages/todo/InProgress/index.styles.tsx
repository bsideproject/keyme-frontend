import styled from "styled-components";

import ICON_CHECKBOX from "~assets/icons/ico_fin.svg";
import { palette } from "~styles/palette";

export const CheckBoxInput = styled.input`
  appearance: none;
  width: 30px;
  height: 30px;
  border: 1.5px solid #c2c2c2;
  border-radius: 10px;
  cursor: pointer;

  &:checked {
    border-color: transparent;
    background-image: url(${ICON_CHECKBOX});
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${palette.primary};
  }
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

export const Container = styled.div`
  min-height: 500px;
`;
