import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import TodoItems from "~components/Todo/TodoItems";
import useGetTodos from "~pages/todo/hooks";
import { Container } from "~pages/todo/InProgress/index.styles";

const InProgressTab = () => {
  const { data, ref, isFetching } = useGetTodos("IN_PROGRESS");

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
