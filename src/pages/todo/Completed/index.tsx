import React from "react";

import TodoItems from "~components/Todo/TodoItems";
import { Container } from "~pages/todo/Completed/index.styles";
import useGetTodos from "~pages/todo/hooks";

const CompletedTab = () => {
  const { data, ref, isFetching, isLoading, refetch } = useGetTodos("COMPLETED");

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

export default CompletedTab;
