import { Category } from "./category";

export interface TodoType {
  id: number;
  title: string;
  completedAt?: Date;
  category?: Category;
}

export interface TodoReqBody {
  title: string;
  keyResultId?: number;
}
