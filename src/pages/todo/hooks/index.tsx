import { useEffect, useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";

import { getTodoLists, TodoStatus } from "~api/todos";
import { palette } from "~styles/palette";
import { TodoListsResBody, TodoType } from "~types/todo";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const useGetTodos = (status: TodoStatus) => {
  const { ref, inView } = useInView();
  const [currentPage, setCurrentPage] = useState(1);

  const LIMIT = 10;

  const { data, hasNextPage, fetchNextPage, isFetching, isLoading, refetch } = useInfiniteQuery<
    TodoListsResBody,
    Error,
    TodoListsResBody,
    [string] | string
  >(
    [`todo-${status}-${currentPage}`],
    async ({ pageParam = 1 }) => {
      setCurrentPage(pageParam);
      const todoStatus = status === "ALL" ? "" : status;
      return await getTodoLists(todoStatus, pageParam, LIMIT);
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        // const maxPage = lastPage.total_count / 30;
        // const nextPage = allPages.length + 1;
        // return nextPage <= maxPage ? nextPage : undefined;
        return false;
      },
      // select: (data) => {
      //   const dummy = data.pages.map((page) => {
      //     const data = page.items
      //       .map((item) => {
      //         const randomIndex = Math.floor(Math.random() * categoryTodo.length);
      //         return {
      //           ...item,
      //           ...categoryTodo[randomIndex],
      //           isCompleted: randomIndex % 2 === 0,
      //           title: dummyTitle[randomIndex],
      //         };
      //       })
      //       .filter((list, i) => {
      //         if (status === "COMPLETED") {
      //           return list.isCompleted;
      //         }
      //
      //         if (status === "IN-PROGRESS") {
      //           return !list.isCompleted;
      //         }
      //
      //         return list;
      //       });
      //     return { ...page, items: data };
      //   });
      //
      //   return { ...data, pages: dummy };
      // },
    }
  );

  // useEffect(() => {
  //   // if (inView && hasNextPage) {
  //   //   fetchNextPage();
  //   // }
  // }, [inView]);

  return { ref, data, fetchNextPage, isFetching, isLoading, refetch, currentPage };
};

export default useGetTodos;
