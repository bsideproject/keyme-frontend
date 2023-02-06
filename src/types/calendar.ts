import { Category } from "./category";
import { TodoType } from "./todo";

export interface CalendarTodo {
  date: string;
  todos: TodoType[];
}

export interface CategoryTodos {
  category?: Category;
  todos: TodoType[];
}
