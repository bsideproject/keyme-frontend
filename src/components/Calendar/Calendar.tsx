import React, { useEffect, useState } from "react";
import { addMonths, startOfMonth, subMonths } from "date-fns";
import { endOfWeek, startOfWeek } from "date-fns";
import { endOfMonth } from "date-fns/esm";

import { useCalendar } from "~hooks/queries/calendar";
import { CalendarTodo } from "~types/calendar";
import { dateFormatter, groupByDate } from "~utils/datetime";

import { RenderDays } from "./Days/Days";
import { RenderHeader } from "./Header/Header";
import { RenderWeeks } from "./Weeks/Weeks";
import { CalendarBox } from "./Calendar.styles";

interface cProps {
  calendarTodos: CalendarTodo[];
  selectedDay: Date;
  setSelectedDay: (params: Date) => void;
  setCalendarTodos: React.Dispatch<React.SetStateAction<CalendarTodo[]>>;
}

interface tempType {
  [key: string]: Set<number>;
}

export const GrassCalendar = ({
  calendarTodos,
  selectedDay,
  setSelectedDay,
  setCalendarTodos,
}: cProps) => {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [completeStatus, setCompleteStatus] = useState<tempType>({});
  const [weekCount, setWeekCount] = useState<number>(5);
  // parameter 변경될 때 수정되도록
  const { calendars } = useCalendar(currentDay.getMonth() + 1, currentDay.getFullYear());

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

    if (calendars) setCalendarTodos(groupByDate(calendars));
  }, [currentDay]);

  useEffect(() => {
    const temp: tempType = {};
    for (let i = 0; i < calendarTodos.length; i++) {
      const uniqueColors = new Set<number>();

      calendarTodos[i].todos.map(({ category }) => {
        if (category?.colorIndex) {
          uniqueColors.add(category.colorIndex);
        }
      });
      const dateStr: string = dateFormatter(calendarTodos[i].date);
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
