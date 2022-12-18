import { axiosClient } from "@utils/axios";

export interface User {
  id: number;
  name: string;
  email: string;
}

export const getUser = async (): Promise<User> => {
  const data = axiosClient.get("/user").then((resp) => resp.data.data);
  return data;
};
