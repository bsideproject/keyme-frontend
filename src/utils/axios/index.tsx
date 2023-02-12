import axios from "axios";

export const isProduction = process.env.NODE_ENV === "production";

export const serverEndPoint = isProduction ? "https://keyme.kr/api/v1" : "https://keyme.kr/api/v1";

export const axiosClient = axios.create({
  baseURL: serverEndPoint,
  withCredentials: true,
});
