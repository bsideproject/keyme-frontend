import { CalendarTodo, CategoryTodos } from "~types/calendar";
import { TodoType } from "~types/todo";

export const dateFormatter = (day: Date): string => {
  return (
    day.getFullYear().toString() +
    "-" +
    (day.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    day.getDate().toString().padStart(2, "0")
  );
};

export const pickerFormmater = (day?: Date): string => {
  if (!day) {
    // 기본값 수정
    return "";
  }
  return (
    day.getFullYear().toString() +
    ". " +
    (day.getMonth() + 1).toString() +
    ". " +
    day.getDate().toString()
  );
};

export const groupByCategory = (result: TodoType[]) => {
  const categoryTodos: CategoryTodos[] = [];
  if (result) {
    for (let i = 0; i < result.length; i++) {
      const key = result[i].category;
      const idx_list = categoryTodos.map((v) => {
        if (v.category === key) {
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

export const groupByDate = (result: TodoType[] | undefined) => {
  const calendarTodos: CalendarTodo[] = [];
  if (result) {
    for (let i = 0; i < result.length; i++) {
      const key = result[i].completedAt?.split(" ")[0];
      if (key) {
        const idx_list = calendarTodos.map((v) => {
          if (v.date === key) {
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
          calendarTodos.push({
            date: key,
            todos: [
              {
                id: result[i].id,
                title: result[i].title,
                category: result[i].category,
              },
            ],
          });
        } else {
          calendarTodos[idx].todos.push({
            id: result[i].id,
            title: result[i].title,
            category: result[i].category,
          });
        }
      }
    }
  }
  return calendarTodos;
};
