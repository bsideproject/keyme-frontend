import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const location = useLocation();
  // 세션(토큰) 체크후 false => 로그인 화면으로 이동

  const sessionCheck = false;
  if (sessionCheck) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
