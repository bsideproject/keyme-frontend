import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import TodoItems from "~components/Todo/TodoItems";
import useGetTodos from "~pages/todo/hooks";
import { Container } from "~pages/todo/InProgress/index.styles";

const InProgressTab = () => {
  const { data, ref, isFetching } = useGetTodos("IN_PROGRESS");

  return (
    <Container>
      <AnimatePresence>
        {data?.pages.map((page, i) => (
          <motion.div
            key={i}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}>
            <React.Fragment key={i}>
              {page.todos.map((todo, idx) => (
                <TodoItems {...todo} key={idx} />
              ))}
            </React.Fragment>
          </motion.div>
        ))}
      </AnimatePresence>

      <div ref={ref} />
      {isFetching && <h1>Loading....</h1>}
    </Container>
  );
};

export default InProgressTab;
