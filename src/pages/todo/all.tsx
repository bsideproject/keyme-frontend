import React, { useEffect } from "react";
import styled from "styled-components";

import IMG_PLUS_BTN from "~assets/images/img_plus_btn.png";
import TodoBox from "~components/Box/TodoBox";
import TodoLabel from "~components/Label/TodoLabel";
import useGetTodos from "~pages/todo/hooks";
import { palette } from "~styles/palette";

const AddButton = styled.button<{ isVisible: boolean }>`
  cursor: pointer;
  background: ${palette.primary};
  width: 54px;
  height: 54px;
  display: ${(props) => (props.isVisible ? "inline-flex" : "none")};
  border-radius: 50%;
  position: sticky;
  position: -webkit-sticky;
  bottom: 120px;
  border: none;
  color: #fff;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  margin-left: 315px;
`;

const AllTab = () => {
  const { data, ref, isFetching, isLoading } = useGetTodos();

  return (
    <div>
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.items.map((todo, idx) => (
            <TodoBox key={idx}>
              <div className="todo-inner">
                <TodoLabel text={todo.labelText} bgColor={todo.labelColor} />
                <span>{todo.name}</span>
              </div>
            </TodoBox>
          ))}
        </React.Fragment>
      ))}

      <AddButton isVisible={!isLoading}>
        <img src={IMG_PLUS_BTN} />
      </AddButton>

      <div ref={ref} />
      {isFetching && <h1>Loading....</h1>}
    </div>
  );
};

export default AllTab;
