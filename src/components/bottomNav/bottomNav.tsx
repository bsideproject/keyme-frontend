import React from "react";
import { NavLink } from "react-router-dom";

import { routePath } from "@routes/index";

import "./bottomNav.css";

function BottomNav() {
  return (
    <nav>
      <NavLink to={routePath.HOME}>
        {/* <uil-credit-card size="24px" /> */}
        <span>Home</span>
      </NavLink>
      <NavLink to={routePath.LOGIN}>
        {/* <uil-credit-card size="24px" /> */}
        <span>OKR</span>
      </NavLink>
      <NavLink to={routePath.LOGIN}>
        {/* <uil-credit-card size="24px" /> */}
        <span>ToDo</span>
      </NavLink>
      <NavLink to={routePath.REPORT}>
        {/* <uil-credit-card size="24px" /> */}
        <span>Report</span>
      </NavLink>
    </nav>
  );
}

export default BottomNav;
