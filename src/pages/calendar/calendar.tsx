import React, { useEffect, useState } from "react";
import { isSameDay } from "date-fns";

import { GrassCalendar } from "~components/Calendar/Calendar";
import CalendarTodos from "~components/CalendarTodos/CalendarTodos";
import { CalendarTodo, CategoryTodos } from "~types/calendar";
import { groupByCategory } from "~utils/datetime";

import { CalendarPage } from "./calendar.styles";

function Calendar() {
  const [selectedDay, setSelectedDay] = useState(new Date());

  // string일 경우 Date로 변환 필요
  // completedAt?: Date;
  // 2022-10-11 23:20:01

  const [calendarTodos, setCalendarTodos] = useState<CalendarTodo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<CategoryTodos[]>([]);

  useEffect(() => {
    const result = calendarTodos.filter(({ date }) => {
      if (date) return isSameDay(date, selectedDay);
    })[0]?.todos;

    setCompletedTodos(groupByCategory(result));
  }, [selectedDay]);

  return (
    <CalendarPage id="Calendar">
      <GrassCalendar
        calendarTodos={calendarTodos}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        setCalendarTodos={setCalendarTodos}
      />
      <CalendarTodos completedTodos={completedTodos} selectedDay={selectedDay} />
    </CalendarPage>
  );
}

export default Calendar;
