import React from "react";
import { startOfWeek } from "date-fns";

import { CategoryTodos } from "~types/calendar";

import Complete from "./Complete/Complete";
import {
  CalendarTodoBox,
  CalendarTodoHeader,
  DateDay,
  DateWeek,
  HeaderDatePart,
  HeaderSummaryPart,
} from "./CalendarTodos.styles";

interface cProps {
  completedTodos: CategoryTodos[];
  selectedDay: Date;
}

function CalendarTodos({ completedTodos, selectedDay }: cProps) {
  const dayWeek = Math.floor((+selectedDay - +startOfWeek(selectedDay)) / 1000 / 3600 / 24);
  const WEEKS = ["일", "월", "화", "수", "목", "금", "토"];
  let todoLength = 0;
  completedTodos.map(({ todos }) => {
    todoLength = todoLength + todos.length;
  });

  return (
    <CalendarTodoBox>
      <CalendarTodoHeader>
        <HeaderDatePart>
          <DateDay>{selectedDay.getDate()}</DateDay>
          <DateWeek>{WEEKS[dayWeek]}요일</DateWeek>
        </HeaderDatePart>
        <HeaderSummaryPart>
          {completedTodos.length
            ? `${completedTodos.length}개의 카테고리, ${todoLength}개의 To Do`
            : "이 날 설정한 플랜이 없습니다."}
        </HeaderSummaryPart>
      </CalendarTodoHeader>
      {completedTodos.map(({ category, todos }, idx) => {
        return (
          <Complete
            key={idx}
            category={category ? category : { id: 0, title: "", colorIndex: 0 }}
            todos={todos}
          />
        );
      })}
    </CalendarTodoBox>
  );
}

export default CalendarTodos;
