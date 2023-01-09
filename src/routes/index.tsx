import React from "react";
import { Route, Routes } from "react-router-dom";

import PrivateRoute from "@routes/PrivateRoute";

const Login = React.lazy(() => import("@pages/login/login"));
const Okr = React.lazy(() => import("@pages/okr/okr"));
const Todo = React.lazy(() => import("@pages/todo/todo"));
const Calendar = React.lazy(() => import("@pages/calendar/calendar"));
const MyPage = React.lazy(() => import("@pages/mypage/mypage"));
const KaKaoCallback = React.lazy(() => import("@pages/kakao/kakaoCallback"));
const NotFound = React.lazy(() => import("@pages/404/notfound"));
export const routePath = {
  LOGIN: "/login",
  OKR: "/",
  TODO: "/todo",
  CALENDAR: "/calendar",
  MYPAGE: "/mypage",
  KAKAO_CALLBACK: "/users/kakao/callback",
  NOT_FOUND: "*",
  ALL_TAB: "?tab=all",
  IN_PROGRESS_TAB: "?tab=in-progress",
  COMPLETE_TAB: "?tab=completed",
};

const AllRoutes = () => {
  const { LOGIN, OKR, TODO, CALENDAR, MYPAGE, KAKAO_CALLBACK, NOT_FOUND } = routePath;

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<MyPage />} path={MYPAGE} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route element={<Okr />} path={OKR} />
        <Route element={<Todo />} path={TODO} />
      </Route>
      <Route element={<Login />} path={LOGIN} />
      <Route element={<Calendar />} path={CALENDAR} />
      <Route element={<KaKaoCallback />} path={KAKAO_CALLBACK} />
      <Route element={<NotFound />} path={NOT_FOUND} />
    </Routes>
  );
};

export default AllRoutes;
