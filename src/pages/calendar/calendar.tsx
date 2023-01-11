import React, { useEffect, useState } from "react";
import { isSameDay } from "date-fns";

import { GrassCalendar } from "@components/Calendar/Calendar";
import CalendarTodos from "@components/CalendarTodos/CalendarTodos";

import { CalendarPage } from "./calendar.styles";

// 데이터 타입 관리...
interface category {
  id: number;
  title: string;
  colorIdx: number;
}

interface todo {
  id: number;
  // categoryIdx or categoryId -> user category로 체크
  category: category;
  title: string;
}

interface calendarTodos {
  date: Date;
  todos: todo[];
}

interface categoryTodos {
  category: category;
  todos: { id: number; title: string }[];
}

const groupBy = (result: todo[]) => {
  const categoryTodos: categoryTodos[] = [];
  if (result) {
    for (let i = 0; i < result.length; i++) {
      const key = result[i].category;

      // category 겹치는게 있는지 체크 (idx로)
      const idx_list = categoryTodos.map((v) => {
        if (v.category.id === key.id) {
          return 1;
        }
        return 0;
      });
      let idx = -1;
      for (let j = 0; j < idx_list.length; j++) {
        if (idx_list[j] === 1) {
          idx = j;
          break;
        }
      }
      if (idx === -1) {
        categoryTodos.push({
          category: key,
          todos: [
            {
              id: result[i].id,
              title: result[i].title,
            },
          ],
        });
      } else {
        categoryTodos[idx].todos.push({
          id: result[i].id,
          title: result[i].title,
        });
      }
    }
  }
  return categoryTodos;
};

function Calendar() {
  const [selectedDay, setSelectedDay] = useState(new Date());

  const [calendarTodos, setCalendarTodos] = useState<calendarTodos[]>([
    {
      // string으로 넘어올 예정
      date: new Date(),
      todos: [
        {
          id: 1,
          category: {
            id: 333,
            title: "갓생살기",
            colorIdx: 3,
          },
          title: "7:00 AM 기상, 새벽 운동 가기",
        },
        {
          id: 2,
          category: {
            id: 344,
            title: "관계",
            colorIdx: 4,
          },
          title: "친구 생일 선물 주문, 레스토랑 예약하기",
        },
        {
          id: 3,
          category: {
            id: 365,
            title: "배움",
            colorIdx: 2,
          },

          title: "뉴진스 - hype boy 원데이 클레스 참여하기",
        },
        {
          id: 4,
          category: {
            id: 333,
            title: "갓생살기",
            colorIdx: 3,
          },
          title: "블로그 주간 일기 챌린지 작성하기",
        },
        {
          id: 5,
          category: {
            id: 344,
            title: "관계",
            colorIdx: 4,
          },
          title: "가족들에게 전화하기",
        },
      ],
    },
    {
      date: new Date("2023-01-05"),
      todos: [
        {
          id: 1,
          category: {
            id: 333,
            title: "갓생살기",
            colorIdx: 3,
          },
          title: "7:00 AM 기상, 새벽 운동 가기",
        },
        {
          id: 2,
          category: {
            id: 344,
            title: "관계",
            colorIdx: 4,
          },
          title: "친구 생일 선물 주문, 레스토랑 예약하기",
        },
        {
          id: 3,
          category: {
            id: 365,
            title: "배움",
            colorIdx: 2,
          },

          title: "뉴진스 - hype boy 원데이 클레스 참여하기",
        },
        {
          id: 4,
          category: {
            id: 333,
            title: "갓생살기",
            colorIdx: 3,
          },
          title: "블로그 주간 일기 챌린지 작성하기",
        },
        {
          id: 5,
          category: {
            id: 344,
            title: "관계",
            colorIdx: 4,
          },
          title: "가족들에게 전화하기",
        },
      ],
    },
  ]);
  const [completedTodos, setCompletedTodos] = useState<categoryTodos[]>([]);

  useEffect(() => {
    const result = calendarTodos.filter(({ date }) => {
      return isSameDay(date, selectedDay);
    })[0]?.todos;

    setCompletedTodos(groupBy(result));
  }, [selectedDay]);

  return (
    <CalendarPage id="Calendar">
      <GrassCalendar
        calendarTodos={calendarTodos}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <CalendarTodos completedTodos={completedTodos} selectedDay={selectedDay} />
    </CalendarPage>
  );
}

export default Calendar;
