import { TodoType } from "~types/todo";
import { axiosClient } from "~utils/axios";

interface props {
  month: number;
  year: number;
}

export const getCalnedars = async ({ month, year }: props): Promise<TodoType[]> => {
  const data = axiosClient
    .get("/todos/calender-report", {
      params: { month, year },
    })
    .then((resp) => resp?.data?.data.todos);
  return data;
};
