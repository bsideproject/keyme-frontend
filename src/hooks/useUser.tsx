import { useQuery, useQueryClient } from "react-query";

import { getUser } from "@api/users";
import { queryKeys } from "@utils/react-query/constant";

export const useUser = () => {
  const queryClient = useQueryClient();
  const { data: user, isLoading } = useQuery([queryKeys.user], getUser, {
    retry: 1,
  });

  const clearUser = () => {
    queryClient.setQueryData([queryKeys.user], null);
  };

  return { user, isLoading, clearUser };
};
