import React from "react";

import { CalendarWeeks, WeeksCell } from "./Weeks.styles";

export const RenderWeeks = () => {
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <CalendarWeeks>
      {weeks.map((v, idx) => {
        return (
          <WeeksCell colorIdx={idx} key={idx}>
            {v}
          </WeeksCell>
        );
      })}
    </CalendarWeeks>
  );
};
