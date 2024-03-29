import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useUser } from "~hooks/queries/user";

const PrivateRoute = () => {
  const location = useLocation();
  // 세션(토큰) 체크후 false => 로그인 화면으로 이동

  const { user, isLoading } = useUser();

  if (!isLoading && !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
