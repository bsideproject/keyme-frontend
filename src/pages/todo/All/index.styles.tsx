import styled from "styled-components";

import { palette } from "~styles/palette";

export const AddButton = styled.button<{ isVisible: boolean }>`
  cursor: pointer;
  background: ${palette.primary};
  width: 54px;
  height: 54px;
  display: ${(props) => (props.isVisible ? "inline-flex" : "none")};
  border-radius: 50%;
  //position: sticky;
  position: -webkit-sticky;
  border: none;
  color: #fff;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  position: sticky;
  bottom: 100px;
`;

export const Container = styled.div`
  min-height: 500px;
`;
