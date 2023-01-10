import { axiosClient } from "@utils/axios";

export interface Category {
  id: number;
  title: string;
  colorIndex: number;
}

export const getCategoryList = async (): Promise<Category[]> => {
  const data = axiosClient.get("/categories").then((resp) => resp?.data?.data.categories);
  return data;
};

export interface CategoryBody {
  title: string;
  colorIndex: number;
}

export const updateCategory = async (id: number, body: CategoryBody): Promise<Category> => {
  const data = axiosClient
    .patch(`/categories/${id}/edit`, { data: body })
    .then((resp) => resp?.data);
  return data;
};
