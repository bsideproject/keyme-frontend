import React from "react";
import { Route, Routes } from "react-router-dom";

import PrivateRoute from "@routes/PrivateRoute";

const Home = React.lazy(() => import("@pages/home/home"));
const Login = React.lazy(() => import("@pages/login/login"));
const Report = React.lazy(() => import("@pages/report/report"));
const MyPage = React.lazy(() => import("@pages/mypage/mypage"));
const KaKaoCallback = React.lazy(() => import("@pages/kakao/kakaoCallback"));
const NotFound = React.lazy(() => import("@pages/404/notfound"));
export const routePath = {
  LOGIN: "/login",
  MYPAGE: "/mypage",
  HOME: "/",
  REPORT: "/report",
  KAKAO_CALLBACK: "/users/kakao/callback",
  NOT_FOUND: "*",
};

const AllRoutes = () => {
  const { LOGIN, MYPAGE, HOME, REPORT, KAKAO_CALLBACK, NOT_FOUND } = routePath;

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<MyPage />} path={MYPAGE} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route element={<Home />} path={HOME} />
      </Route>
      <Route element={<Login />} path={LOGIN} />
      <Route element={<Report />} path={REPORT} />
      <Route element={<KaKaoCallback />} path={KAKAO_CALLBACK} />
      <Route element={<NotFound />} path={NOT_FOUND} />
    </Routes>
  );
};

export default AllRoutes;
