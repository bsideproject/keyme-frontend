import React, { useEffect, useState } from "react";
import { addMonths, startOfMonth, subMonths } from "date-fns";
import { endOfWeek, startOfWeek } from "date-fns";
import { endOfMonth } from "date-fns/esm";

import { CalendarTodo } from "~types/calendar";

import { RenderDays } from "./Days/Days";
import { RenderHeader } from "./Header/Header";
import { RenderWeeks } from "./Weeks/Weeks";
import { CalendarBox } from "./Calendar.styles";

interface cProps {
  calendarTodos: CalendarTodo[];
  selectedDay: Date;
  setSelectedDay: (params: Date) => void;
  currentDay: Date;
  setCurrentDay: (params: Date) => void;
}

interface tempType {
  [key: string]: Set<number>;
}

export const GrassCalendar = ({
  calendarTodos,
  selectedDay,
  setSelectedDay,
  currentDay,
  setCurrentDay,
}: cProps) => {
  const [completeStatus, setCompleteStatus] = useState<tempType>({});
  const [weekCount, setWeekCount] = useState<number>(5);

  const prevMonth = () => {
    setCurrentDay(startOfMonth(subMonths(currentDay, 1)));
  };
  const nextMonth = () => {
    setCurrentDay(startOfMonth(addMonths(currentDay, 1)));
  };

  const onDateClick = (day: Date) => {
    setSelectedDay(day);
  };

  useEffect(() => {
    setWeekCount(
      Math.ceil(
        (+endOfWeek(endOfMonth(currentDay)) - +startOfWeek(startOfMonth(currentDay))) /
          3600 /
          24 /
          7 /
          1000
      )
    );

    setSelectedDay(currentDay);
  }, [currentDay]);

  useEffect(() => {
    const temp: tempType = {};
    for (let i = 0; i < calendarTodos.length; i++) {
      const uniqueColors = new Set<number>();

      calendarTodos[i].todos.map(({ category }) => {
        if (category) uniqueColors.add(category.colorIndex);
      });
      const dateStr: string = calendarTodos[i].date.split(" ")[0];
      temp[dateStr] = uniqueColors;
    }
    setCompleteStatus(temp);
  }, [calendarTodos]);

  return (
    <CalendarBox weekCount={weekCount}>
      <RenderHeader currentDay={currentDay} prevMonth={prevMonth} nextMonth={nextMonth} />
      <RenderWeeks />
      <RenderDays
        currentDay={currentDay}
        selectedDate={selectedDay}
        onDateClick={onDateClick}
        completeStatus={completeStatus}
      />
    </CalendarBox>
  );
};
