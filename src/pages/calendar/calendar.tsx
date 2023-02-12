import React, { useEffect, useState } from "react";
import { isSameDay } from "date-fns";

import { GrassCalendar } from "~components/Calendar/Calendar";
import CalendarTodos from "~components/CalendarTodos/CalendarTodos";
import { useCalendar } from "~hooks/queries/calendar";
import { CalendarTodo, CategoryTodos } from "~types/calendar";
import { groupByCategory, groupByDate } from "~utils/datetime";

import { CalendarPage } from "./calendar.styles";

function Calendar() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(new Date());
  const { calendars, isLoading } = useCalendar(currentDay.getMonth() + 1, currentDay.getFullYear());
  const [calendarTodos, setCalendarTodos] = useState<CalendarTodo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<CategoryTodos[]>([]);

  useEffect(() => {
    const result = calendarTodos.filter(({ date }) => {
      if (date) return isSameDay(new Date(date), selectedDay);
    })[0]?.todos;

    setCompletedTodos(groupByCategory(result));
  }, [selectedDay]);

  useEffect(() => {
    setCalendarTodos(groupByDate(calendars));
  }, [isLoading, currentDay]);

  return (
    <CalendarPage id="Calendar">
      {isLoading ? (
        ""
      ) : (
        <>
          <GrassCalendar
            calendarTodos={calendarTodos}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            currentDay={currentDay}
            setCurrentDay={setCurrentDay}
          />
          <CalendarTodos completedTodos={completedTodos} selectedDay={selectedDay} />
        </>
      )}
    </CalendarPage>
  );
}

export default Calendar;
