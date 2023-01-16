import React, { FC } from "react";
import styled from "styled-components";

import { palette } from "~styles/palette";
import { ellipsis } from "~styles/utils";

const Container = styled.div`
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  background-color: #f6f8fe;
  border-radius: 13px;
  color: ${palette.font.black01};
  //display: flex;
  //align-items: center;
  margin-bottom: 10px;
  padding: 18px 33px 23px 19px;
  .line {
    border-left: 1px solid gray;
    height: 20px;
    margin: 0 20px;
  }
  .bottom-tools {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    span {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      font-size: 15px;
    }
  }
  .todo-text {
    width: 235px;
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.04em;
    padding-left: 45px;
    margin-top: 10px;
  }
  .todo-inner {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

interface Props {
  children: React.ReactNode;
}

const TodoBox: FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default TodoBox;
