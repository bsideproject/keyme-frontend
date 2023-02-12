import React, { MouseEventHandler } from "react";
import { format } from "date-fns";

import { ReactComponent as IconNext } from "~assets/icons/ico_next.svg";
import { ReactComponent as IconPrev } from "~assets/icons/ico_prev.svg";

import { CalendarHeader, CalendarMonth } from "./Header.styles";
interface headerProps {
  currentDay: Date;
  prevMonth: MouseEventHandler;
  nextMonth: MouseEventHandler;
}

export const RenderHeader = ({ currentDay, prevMonth, nextMonth }: headerProps) => {
  return (
    <CalendarHeader>
      <IconPrev onClick={prevMonth} />
      <CalendarMonth>{format(currentDay, "M")}월</CalendarMonth>
      <IconNext onClick={nextMonth} />
    </CalendarHeader>
  );
};
