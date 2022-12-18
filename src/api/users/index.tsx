import { axiosClient } from "@utils/axios";

export const getUser = async () => {
  const data = axiosClient.get("/user").then((resp) => resp?.data);
  return data;
};
