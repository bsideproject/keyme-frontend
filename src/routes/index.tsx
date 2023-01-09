import React from "react";
import { Route, Routes } from "react-router-dom";

import AllTabPage from "@pages/todo/all";
import CompletedTab from "@pages/todo/complete";
import InProgressTab from "@pages/todo/inProgress";
import PrivateRoute from "@routes/PrivateRoute";

const Login = React.lazy(() => import("@pages/login/login"));
const Okr = React.lazy(() => import("@pages/okr/okr"));
const Todo = React.lazy(() => import("@pages/todo/todo"));
const Report = React.lazy(() => import("@pages/report/report"));
const MyPage = React.lazy(() => import("@pages/mypage/mypage"));
const KaKaoCallback = React.lazy(() => import("@pages/kakao/kakaoCallback"));
const NotFound = React.lazy(() => import("@pages/404/notfound"));
export const routePath = {
  LOGIN: "/login",
  OKR: "/",
  TODO: "/todo",
  REPORT: "/report",
  MYPAGE: "/mypage",
  KAKAO_CALLBACK: "/users/kakao/callback",
  ALL_TAB: "?tab=all",
  IN_PROGRESS_TAB: "?tab=in-progress",
  COMPLETE_TAB: "?tab=complete",
  NOT_FOUND: "*",
};

const AllRoutes = () => {
  const {
    LOGIN,
    OKR,
    TODO,
    REPORT,
    MYPAGE,
    KAKAO_CALLBACK,
    NOT_FOUND,
    ALL_TAB,
    IN_PROGRESS_TAB,
    COMPLETE_TAB,
  } = routePath;

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<MyPage />} path={MYPAGE} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route element={<Okr />} path={OKR} />
        <Route element={<Todo />} path={TODO}>
          <Route element={<AllTabPage />} path={ALL_TAB} />
          <Route element={<InProgressTab />} path={IN_PROGRESS_TAB} />
          <Route element={<CompletedTab />} path={COMPLETE_TAB} />
        </Route>
      </Route>
      <Route element={<Login />} path={LOGIN} />
      <Route element={<Report />} path={REPORT} />
      <Route element={<KaKaoCallback />} path={KAKAO_CALLBACK} />
      <Route element={<NotFound />} path={NOT_FOUND} />
    </Routes>
  );
};

export default AllRoutes;
