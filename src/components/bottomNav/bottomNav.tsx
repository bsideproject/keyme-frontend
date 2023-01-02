import React from "react";

import { ReactComponent as IconCalendar } from "@assets/icons/icoCalendar.svg";
import { ReactComponent as IconHome } from "@assets/icons/icoHome.svg";
import { ReactComponent as IconMykeyme } from "@assets/icons/icoMykeyme.svg";
import { ReactComponent as IconTodo } from "@assets/icons/icoTodo.svg";
import { routePath } from "@routes/index";
import { BottomNavigation, NavigationLink, NavigationText } from "@styles/bottomNav";

function BottomNav() {
  return (
    <BottomNavigation>
      <NavigationLink to={routePath.OKR}>
        <IconHome />
        <NavigationText>홈</NavigationText>
      </NavigationLink>
      <NavigationLink to={routePath.TODO}>
        <IconTodo />
        <NavigationText>ToDo</NavigationText>
      </NavigationLink>
      <NavigationLink to={routePath.REPORT}>
        <IconCalendar />
        <NavigationText>캘린더</NavigationText>
      </NavigationLink>
      <NavigationLink to={routePath.MYPAGE}>
        <IconMykeyme />
        <NavigationText>마이키미</NavigationText>
      </NavigationLink>
    </BottomNavigation>
  );
}

export default BottomNav;
