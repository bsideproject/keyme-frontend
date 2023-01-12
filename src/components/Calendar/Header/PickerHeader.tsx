import React, { MouseEventHandler } from "react";
import { format } from "date-fns";

import { ReactComponent as IconPrev } from "~assets/icons/ico_arrow_left.svg";
import { ReactComponent as IconNext } from "~assets/icons/ico_arrow_right.svg";

import { PickerCalendarHeader, PickerCalendarMonth } from "./Header.styles";
interface headerProps {
  currentDay: Date;
  prevMonth: MouseEventHandler;
  nextMonth: MouseEventHandler;
}

export const PickerHeader = ({ currentDay, prevMonth, nextMonth }: headerProps) => {
  return (
    <PickerCalendarHeader>
      <PickerCalendarMonth>
        {format(currentDay, "Y") + ". " + format(currentDay, "M")}
      </PickerCalendarMonth>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <IconPrev onClick={prevMonth} />
        <IconNext onClick={nextMonth} />
      </div>
    </PickerCalendarHeader>
  );
};
