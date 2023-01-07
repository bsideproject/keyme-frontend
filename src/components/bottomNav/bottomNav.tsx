import React from "react";

import { ReactComponent as IconCalendar } from "@assets/icons/ico_calendar.svg";
import { ReactComponent as IconHome } from "@assets/icons/ico_home.svg";
import { ReactComponent as IconMykeyme } from "@assets/icons/ico_mykeyme.svg";
import { ReactComponent as IconTodo } from "@assets/icons/ico_todo.svg";
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
      <NavigationLink to={routePath.CALENDAR}>
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
