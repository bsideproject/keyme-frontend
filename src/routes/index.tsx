import React from "react";
import { Route, Routes } from "react-router-dom";

import PrivateRoute from "@routes/PrivateRoute";

const Home = React.lazy(() => import("@pages/home/home"));
const Login = React.lazy(() => import("@pages/login/login"));
const Report = React.lazy(() => import("@pages/report/report"));
const MyPage = React.lazy(() => import("@pages/mypage/mypage"));
const KaKaoCallback = React.lazy(() => import("@pages/kakao/kakaoCallback"));
export const routePath = {
  LOGIN: "/login",
  MYPAGE: "/mypage",
  HOME: "/",
  REPORT: "/report",
  KAKAO_CALLBACK: "/auth/kakao/callback",
};

const AllRoutes = () => {
  const { LOGIN, MYPAGE, HOME, REPORT, KAKAO_CALLBACK } = routePath;

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<MyPage />} path={MYPAGE} />
      </Route>
      <Route element={<Home />} path={HOME} />
      <Route element={<Login />} path={LOGIN} />
      <Route element={<Report />} path={REPORT} />
      <Route element={<KaKaoCallback />} path={KAKAO_CALLBACK} />
    </Routes>
  );
};

export default AllRoutes;
