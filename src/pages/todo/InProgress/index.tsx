import React from "react";
import { useRecoilState } from "recoil";

import TodoItems from "~components/Todo/TodoItems";
import useGetTodos from "~pages/todo/hooks";
import { Container } from "~pages/todo/InProgress/index.styles";

import { todoModalAtom } from "../../../recoil/atoms";

const InProgressTab = () => {
  const { data, ref, isFetching, isLoading, refetch } = useGetTodos("IN_PROGRESS");

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

export default InProgressTab;
