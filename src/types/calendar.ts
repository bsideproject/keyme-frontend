import { Category } from "./category";
import { TodoType } from "./todo";

export interface CalendarTodo {
  date: Date;
  todos: TodoType[];
}

export interface CategoryTodos {
  category?: Category;
  todos: TodoType[];
}
