import React from "react";
import { format } from "date-fns";
import { endOfMonth, endOfWeek, startOfMonth, startOfWeek } from "date-fns";
import { addDays, isSameDay, isSameMonth } from "date-fns";

import { dateFormatter } from "~utils/datetime";

import { CalendarRow } from "../Calendar.styles";

import Grass from "./Grass/Grass";
import { CalendarDays, DaysCell, DaysDay, DaysTodoBox } from "./Days.styles";

interface tempType {
  [key: string]: Set<number>;
}
interface daysProps {
  currentDay: Date;
  selectedDate: Date;
  completeStatus: tempType;
  onDateClick: (day: Date) => void;
}

export const RenderDays = ({
  currentDay,
  selectedDate,
  completeStatus,
  onDateClick,
}: daysProps) => {
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
      const dayText = dateFormatter(day);
      days.push(
        <DaysCell
          key={day.toString()}
          onClick={() => {
            if (isSameMonth(cloneDay, currentDay)) {
              onDateClick(cloneDay);
            }
          }}>
          <DaysDay
            isSameDay={isSameDay(day, selectedDate)}
            isSameMonth={isSameMonth(day, currentDay)}>
            {formattedDate}
          </DaysDay>
          <DaysTodoBox>
            {dayText in completeStatus && isSameMonth(day, currentDay) ? (
              <Grass category={completeStatus[dayText]} />
            ) : (
              ""
            )}
          </DaysTodoBox>
        </DaysCell>
      );
      day = addDays(day, 1);
    }
    rows.push(<CalendarRow key={day.toString()}>{days}</CalendarRow>);
    days = [];
  }
  return <CalendarDays>{rows}</CalendarDays>;
};
