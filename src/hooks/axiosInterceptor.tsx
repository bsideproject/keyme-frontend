import { FC, ReactElement, useEffect } from "react";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

import { axiosClient } from "@utils/axios";

interface Props {
  children: ReactElement;
}

const AxiosInterceptor: FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const resInterceptor = (res: AxiosResponse) => {
      return res;
    };

    const reqInterceptor = (config: AxiosRequestConfig) => {
      return config;
    };

    const errInterceptor = (error: AxiosError) => {
      if (error.message === "Network Error") {
        setTimeout(() => {
          Promise.reject(error);
        }, 200);
      }

      if (error.response?.status === 401) {
        // 401 error 발생 시 메인 페이지 또는 로그인 페이지 이동
        navigate("/login");

        return Promise.reject(error);
      }
      return Promise.reject(error);
    };

    const resResult = axiosClient.interceptors.response.use(resInterceptor, errInterceptor);
    const reqResult = axiosClient.interceptors.request.use(reqInterceptor, errInterceptor);
    return () => {
      axiosClient.interceptors.response.eject(resResult);
      axiosClient.interceptors.request.eject(reqResult);
    };
  }, [navigate]);

  return children;
};

export default AxiosInterceptor;
