import { Category } from "./category";

export interface TodoType {
  id: number;
  title: string;
  isCompleted: boolean;
  category?: Category;
}
