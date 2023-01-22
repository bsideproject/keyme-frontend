import { Category } from "~types/category";
import { axiosClient } from "~utils/axios";

export const getCategoryList = async (): Promise<Category[]> => {
  const data = axiosClient.get("/categories").then((resp) => resp?.data?.data.categories);
  return data;
};

export interface CategoryBody {
  title: string;
  colorIndex: number;
}

export const updateCategory = async (id: number, body: CategoryBody): Promise<Category> => {
  const data = axiosClient.patch(`/categories/${id}/edit`, body).then((resp) => resp?.data);
  return data;
};
