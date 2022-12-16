import axios from "axios";

const isProduction = process.env.NODE_ENV === "production";

const serverEndPoint = isProduction ? "" : "http://localhost:8080";

export const axiosClient = axios.create({
  baseURL: serverEndPoint,
});
