import React, { useEffect } from "react";
import styled from "styled-components";

import ICON_EDIT from "~assets/icons/ico_edit.svg";
import ICON_DELETE from "~assets/icons/icon_delete.svg";
import IMG_PLUS_BTN from "~assets/images/img_plus_btn.png";
import TodoBox from "~components/Box/TodoBox";
import TodoLabel from "~components/Label/TodoLabel";
import TodoItems from "~components/Todo/TodoItems";
import { AddButton, Container } from "~pages/todo/All/index.styles";
import useGetTodos from "~pages/todo/hooks";
import { palette } from "~styles/palette";

const AllTab = () => {
  const { data, ref, isFetching } = useGetTodos("ALL");

  console.log(data?.pages[0].todos, "data");

  return (
    <Container>
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.todos.map((todo, idx) => (
            <TodoItems {...todo} key={idx} />
          ))}
        </React.Fragment>
      ))}

      <div ref={ref} />
      {isFetching && <h1>Loading....</h1>}
    </Container>
  );
};

export default AllTab;
