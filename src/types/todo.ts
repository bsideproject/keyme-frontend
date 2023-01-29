import { Category } from "./category";

export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
  category?: {
    id: number;
    title: string;
    colorInt: number;
  } | null;
}

export interface TodoListsResBody {
  todos: Todo[];
}

export interface TodoType {
  id: number;
  title: string;
  completedAt?: Date;
  category?: Category;
}

export interface TodoReqBody {
  title: string;
  keyResultId?: number | null;
}

export type KeyResultResBody = Omit<Todo, "isCompleted">;
