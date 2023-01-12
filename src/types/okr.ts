import { Category } from "./category";
import { TodoType } from "./todo";

export interface OKRType {
  id: number;
  title: string;
  dDay?: number;
  progress: number;
  category: Category;
  keyResults?: KeyResultType[];
}

export interface KeyResultType {
  id: number;
  title: string;
  progress: number;
}

export interface OkrDetail {
  id: number;
  title: string;
  keyResults: KeyResultType[];
  todos: TodoType[];
}
