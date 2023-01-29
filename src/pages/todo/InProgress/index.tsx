import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import TodoItems from "~components/Todo/TodoItems";
import useGetTodos from "~pages/todo/hooks";
import { Container } from "~pages/todo/InProgress/index.styles";

const InProgressTab = () => {
  const { data, ref, isFetching, isLoading, refetch } = useGetTodos("IN_PROGRESS");

  return (
    <Container>
      {data?.pages.map((page, i) => (
        <AnimatePresence key={i}>
          <React.Fragment>
            <motion.div
              initial={{ y: "50%", opacity: 0, scale: "0.5" }}
              exit={{ y: "50%", opacity: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}>
              {page.todos.map((todo, idx) => (
                <TodoItems {...todo} key={idx} />
              ))}
            </motion.div>
          </React.Fragment>
        </AnimatePresence>
      ))}

      <div ref={ref} />
      {isFetching && <h1>Loading....</h1>}
    </Container>
  );
};

export default InProgressTab;
