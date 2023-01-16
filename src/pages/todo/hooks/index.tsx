import { useEffect, useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";

import { palette } from "~styles/palette";

export interface TodoItem {
  id: number;
  labelText: string;
  labelColor: string;
  title: string;
  isCompleted: boolean;
}

export interface TodoList {
  total_count: number;
  incomplete_results: boolean;
  items: TodoItem[];
}
const fetchRepositories = async (page: number) => {
  return await axios
    .get<TodoList>(
      `https://api.github.com/search/repositories?q=topic:reactjs&per_page=30&page=${page}`
    )
    .then((resp) => resp.data);
};

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export const categoryTodo = [
  { labelText: "건강", labelColor: palette.todo.yellow02 },
  { labelText: "관계", labelColor: palette.todo.red02 },
  { labelText: "업무", labelColor: palette.todo.purple01 },
  { labelText: "배움", labelColor: palette.todo.green01 },
  { labelText: "여가", labelColor: palette.todo.blue01 },
  { labelText: "", labelColor: "#222" },
];

const dummyTitle = [
  "헬스장 가서 유산소로 웜업 10분 먼저 하고 근력은 제일 재밌는 것 부터 시작해서 1시간 채우기 !",
  "헬스장에서 마지막에 스트레칭 꼭 하기",
  "HR 주간 업무 입력하기",
  "디자인 QA에 필요한 디바이스 대여하기",
  "뉴진스 - hype boy 원데이 클래스 참여",
  "뉴진스 - hype boy 원데이 클래스 참여",
];

const useGetTodos = (status: string) => {
  const { ref, inView } = useInView();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, hasNextPage, fetchNextPage, isFetching, isLoading } = useInfiniteQuery<
    TodoList,
    Error,
    TodoList,
    [string] | string
  >(
    [`todo-${currentPage}`],
    async ({ pageParam = 1 }) => {
      return await fetchRepositories(pageParam);
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPage = lastPage.total_count / 30;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPage ? nextPage : undefined;
      },
      select: (data) => {
        const dummy = data.pages.map((page) => {
          const data = page.items
            .map((item) => {
              const randomIndex = Math.floor(Math.random() * categoryTodo.length);
              return {
                ...item,
                ...categoryTodo[randomIndex],
                isCompleted: randomIndex % 2 === 0,
                title: dummyTitle[randomIndex],
              };
            })
            .filter((list, i) => {
              if (status === "COMPLETED") {
                return list.isCompleted;
              }

              if (status === "IN-PROGRESS") {
                return !list.isCompleted;
              }

              return list;
            });
          return { ...page, items: data };
        });

        return { ...data, pages: dummy };
      },
    }
  );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return { ref, data, fetchNextPage, isFetching, isLoading };
};

export default useGetTodos;
