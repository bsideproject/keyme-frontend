import axios from "axios";

const isProduction = process.env.NODE_ENV === "production";

export const serverEndPoint = isProduction
  ? "http://101.101.219.221/api/v1"
  : "http://101.101.219.221/api/v1";

export const axiosClient = axios.create({
  baseURL: serverEndPoint,
  withCredentials: true,
});
