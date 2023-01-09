import React from "react";

import { Calender } from "@components/calendar/calendar";
import { useUser } from "@hooks/useUser";

function Report() {
  const { user } = useUser();
  return (
    <div>
      <p>{user?.name}의 대시보드</p>
      <p>나의 관심사는 운동이에요 !</p>
      <Calender />
    </div>
  );
}

export default Report;
