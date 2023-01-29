import { useMutation, useQuery, useQueryClient } from "react-query";

import {
  completeTodo,
  createTodo,
  deleteTodo,
  getKeyResults,
  rollbackTodo,
  TodoStatus,
  updateTodo,
} from "~api/todos";
import { TodoReqBody } from "~types/todo";
import { queryKeys } from "~utils/react-query/constant";

export const useCreateTodo = () => {
  const { mutate: createTodoMutate, isLoading } = useMutation(
    async ({ title, keyResultId }: TodoReqBody) => {
      const body = { title, keyResultId };
      return createTodo(body);
    }
  );

  return { createTodoMutate, isLoading };
};

export const useCompleteTodo = (status: TodoStatus, page: number) => {
  const queryClient = useQueryClient();
  const { mutate: completeTodoMutate, isLoading } = useMutation(
    (todoId: number) => {
      return completeTodo(todoId);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`todo-${status}-${page}`]);
      },
    }
  );

  return { completeTodoMutate, isLoading };
};

export const useRollbackTodo = (status: TodoStatus, page: number) => {
  const queryClient = useQueryClient();

  const { mutate: rollbackTodoMutate, isLoading } = useMutation(
    (todoId: number) => {
      return rollbackTodo(todoId);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`todo-${status}-${page}`]);
      },
    }
  );

  return { rollbackTodoMutate, isLoading };
};

export const useDeleteTodo = (status: TodoStatus, page: number) => {
  const queryClient = useQueryClient();
  const { mutate: deleteTodoMutate, isLoading } = useMutation(
    (todoId: number) => {
      return deleteTodo(todoId);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`todo-${status}-${page}`]);
        alert("삭제 성공");
      },
    }
  );

  return { deleteTodoMutate, isLoading };
};

export const useUpdateTodo = (status: TodoStatus, page: number) => {
  const queryClient = useQueryClient();
  const { mutate: updateTodoMutate, isLoading } = useMutation(
    (data: { title: string; keyResultId?: number | null; todoId: number }) => {
      const { title, keyResultId, todoId } = data;

      return updateTodo(todoId, { title, keyResultId });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`todo-${status}-${page}`]);

        alert("성공");
      },
    }
  );

  return { updateTodoMutate, isLoading };
};

export const useGetKeyResults = () => {
  const { data: keyResultLists, isLoading } = useQuery([queryKeys.keyResults], getKeyResults);

  return { keyResultLists, isLoading };
};
