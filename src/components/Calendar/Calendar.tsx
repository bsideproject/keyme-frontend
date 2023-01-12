import React, { useEffect, useState } from "react";
import { addMonths, startOfMonth, subMonths } from "date-fns";
import { endOfWeek, startOfWeek } from "date-fns";
import { endOfMonth } from "date-fns/esm";

import { Category } from "~types/category";
import { dateFormatter } from "~utils/datetime";

import { RenderDays } from "./Days/Days";
import { RenderHeader } from "./Header/Header";
import { RenderWeeks } from "./Weeks/Weeks";
import { CalendarBox } from "./Calendar.styles";

interface todo {
  id: number;
  // categoryIdx or categoryId -> user category로 체크
  category: Category;
  title: string;
}

interface calendarTodos {
  date: Date;
  todos: todo[];
}

interface cProps {
  calendarTodos: calendarTodos[];
  selectedDay: Date;
  setSelectedDay: (params: Date) => void;
}

interface tempType {
  [key: string]: Set<number>;
}

export const GrassCalendar = ({ calendarTodos, selectedDay, setSelectedDay }: cProps) => {
  const [currentDay, setCurrentDay] = useState(new Date());
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
    const temp: tempType = {};
    for (let i = 0; i < calendarTodos.length; i++) {
      const uniqueColors = new Set<number>();

      calendarTodos[i].todos.map(({ category: { colorIndex } }) => {
        uniqueColors.add(colorIndex);
      });
      const dateStr: string = dateFormatter(calendarTodos[i].date);
      temp[dateStr] = uniqueColors;
    }

    setCompleteStatus(temp);

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