import { TodoReqBody } from "~types/todo";
import { axiosClient } from "~utils/axios";

const baseUrl = "/todos";

export const createTodo = async (body: TodoReqBody) => {
  return axiosClient.post(`${baseUrl}/write`, body).then((resp) => resp?.data);
};
