import React from "react";
import { format } from "date-fns";
import { endOfMonth, endOfWeek, startOfMonth, startOfWeek } from "date-fns";
import { addDays, isSameDay, isSameMonth } from "date-fns";

import { CalendarRow } from "../Calendar.styles";

import { CalendarDays, DaysCell, DaysDay } from "./Days.styles";

interface daysProps {
  currentDay: Date;
  pickedDate?: Date;
  onDateClick: (day: Date) => void;
}

export const PickerDays = ({ currentDay, pickedDate, onDateClick }: daysProps) => {
  const monthStart = startOfMonth(currentDay);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      days.push(
        <DaysCell
          key={day.toString()}
          onClick={() => {
            if (isSameMonth(cloneDay, currentDay)) {
              onDateClick(cloneDay);
            }
          }}>
          <DaysDay
            isSameDay={pickedDate ? isSameDay(day, pickedDate) : false}
            isSameMonth={isSameMonth(day, currentDay)}>
            {formattedDate}
          </DaysDay>
        </DaysCell>
      );
      day = addDays(day, 1);
    }
    rows.push(<CalendarRow key={day.toString()}>{days}</CalendarRow>);
    days = [];
  }
  return <CalendarDays>{rows}</CalendarDays>;
};
