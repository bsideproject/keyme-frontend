import { useMutation } from "react-query";

import { createTodo } from "~api/todos";
import { TodoReqBody } from "~types/todo";

export const useCreateTodo = () => {
  const { mutate: createTodoMutate, isLoading } = useMutation(
    async ({ title, keyResultId }: TodoReqBody) => {
      const body = { title, keyResultId };
      return createTodo(body);
    }
  );

  return { createTodoMutate, isLoading };
};
