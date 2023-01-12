import { useMutation, useQuery, useQueryClient } from "react-query";

import { CategoryBody, getCategoryList, updateCategory } from "~api/categories";
import { queryKeys } from "~utils/react-query/constant";

interface Category {
  id: number;
  body: CategoryBody;
}

export const useCategory = () => {
  const queryClient = useQueryClient();
  const { data: categories, isLoading } = useQuery([queryKeys.categories], getCategoryList, {
    retry: 0,
  });

  const mutation = useMutation(
    async (newCategory: Category) => {
      await updateCategory(newCategory.id, newCategory.body);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.categories]);
      },
    }
  );
  return { categories, isLoading, mutation };
};
