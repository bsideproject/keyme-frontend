import { useMutation, useQuery, useQueryClient } from "react-query";

import { createOkr, getOkrList, OkrBody } from "@api/okrs";
import { queryKeys } from "@utils/react-query/constant";

export const useOkr = () => {
  const queryClient = useQueryClient();
  const { data: okrs, isLoading } = useQuery([queryKeys.okrs], getOkrList, {
    retry: 0,
  });

  const mutation = useMutation(
    (newOkr: OkrBody) => {
      return createOkr(newOkr);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.okrs]);
      },
    }
  );

  return { okrs, isLoading, mutation };
};
