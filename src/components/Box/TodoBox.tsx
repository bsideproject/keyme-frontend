import React, { FC } from "react";
import styled from "styled-components";

import { palette } from "@styles/palette";
import { ellipsis } from "@styles/utils";

const Container = styled.div`
  width: 353px;
  background-color: #f6f8fe;
  border-radius: 13px;
  color: ${palette.font.black01};
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 18px 10px;

  .todo-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    span {
      display: inline-block;
      width: 280px;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      ${ellipsis};
    }
  }
`;

interface Props {
  children: React.ReactNode;
}

const TodoBox: FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default TodoBox;
