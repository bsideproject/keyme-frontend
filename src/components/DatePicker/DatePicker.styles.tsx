import styled from "styled-components";

import { pickerHeight, rPickerHeight } from "~styles/anim";

export const PickerContainer = styled.div<{ pickerShow: boolean }>`
  overflow-y: hidden;
  max-height: ${({ pickerShow }) => (pickerShow ? "291px" : "0")};
  animation: ${({ pickerShow }) => (pickerShow ? pickerHeight : rPickerHeight)} 0.5s ease-in-out;
`;

export const DatePickerTarget = styled.div`
  display: flex;
  padding: 0 1rem;
  background-color: #f8f8f8;
  height: 86px;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
  & div {
    flex: 1;
  }
`;
