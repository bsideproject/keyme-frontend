import { KeyResultResBody, TodoReqBody } from "~types/todo";
import { axiosClient } from "~utils/axios";

const baseUrl = "/todos";
export type TodoStatus = "IN_PROGRESS" | "COMPLETED" | "ALL";

export const createTodo = async (body: TodoReqBody) => {
  return axiosClient.post(`${baseUrl}/write`, body).then((resp) => resp?.data);
};

export const getTodoLists = async (
  status: "IN_PROGRESS" | "COMPLETED" | "",
  pageNumber: number,
  limit: number
) => {
  const url = status
    ? `${baseUrl}?limit=${limit}&pageNumber=${pageNumber}&status=${status}`
    : `${baseUrl}?limit=${limit}&pageNumber=${pageNumber}`;

  return axiosClient.get(url).then((resp) => resp?.data?.data);
};

export const completeTodo = async (todoId: number) => {
  return await axiosClient.patch(`${baseUrl}/${todoId}/complete`).then((resp) => resp?.data);
};

export const rollbackTodo = async (todoId: number) => {
  return await axiosClient.patch(`${baseUrl}/${todoId}/rollback`).then((resp) => resp?.data);
};

export const deleteTodo = async (todoId: number) => {
  return await axiosClient.delete(`${baseUrl}/${todoId}`).then((resp) => resp?.data);
};

export const updateTodo = async (
  todoId: number,
  body: { title: string; keyResultId?: number | null }
) => {
  return await axiosClient.patch(`${baseUrl}/${todoId}/edit`, body).then((resp) => resp?.data);
};

export const getKeyResults = async (): Promise<KeyResultResBody[]> => {
  return await axiosClient.get(`/key-results`).then((resp) => resp?.data?.data?.keyResults);
};
