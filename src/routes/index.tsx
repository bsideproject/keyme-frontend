import React from "react";
import { Route, Routes } from "react-router-dom";

import PrivateRoute from "@routes/PrivateRoute";

const Home = React.lazy(() => import("@pages/home/home"));
const Login = React.lazy(() => import("@pages/login/login"));
const MyPage = React.lazy(() => import("@pages/mypage/mypage"));

export const routePath = { LOGIN: "/login", MYPAGE: "/mypage", HOME: "/" };

const AllRoutes = () => {
  const { LOGIN, MYPAGE, HOME } = routePath;

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<MyPage />} path={MYPAGE} />
      </Route>
      <Route element={<Home />} path={HOME} />
      <Route element={<Login />} path={LOGIN} />
    </Routes>
  );
};

export default AllRoutes;
