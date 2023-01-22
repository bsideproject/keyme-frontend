import { Category } from "./category";

export interface OKRType {
  id: number;
  title: string;
  dday?: number;
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
}
