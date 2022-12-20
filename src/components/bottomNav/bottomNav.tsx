import React from "react";
import { NavLink } from "react-router-dom";

import { routePath } from "@routes/index";

import "./bottomNav.css";

function BottomNav() {
  return (
    <nav>
      <NavLink to={routePath.OKR}>
        {/* <uil-credit-card size="24px" /> */}
        <span>OKR</span>
      </NavLink>
      <NavLink to={routePath.TODO}>
        {/* <uil-credit-card size="24px" /> */}
        <span>ToDo</span>
      </NavLink>
      <NavLink to={routePath.REPORT}>
        {/* <uil-credit-card size="24px" /> */}
        <span>Report</span>
      </NavLink>
      <NavLink to={routePath.MYPAGE}>
        {/* <uil-credit-card size="24px" /> */}
        <span>Mypage</span>
      </NavLink>
    </nav>
  );
}

export default BottomNav;
