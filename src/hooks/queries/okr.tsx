import { useMutation, useQuery, useQueryClient } from "react-query";

import { createKeyResult, createOkr, getOkrDetail, getOkrList, KrBody, OkrBody } from "~api/okrs";
import { queryKeys } from "~utils/react-query/constant";

export const useOkr = (page: number) => {
  const queryClient = useQueryClient();

  const { data: okrs, isLoading } = useQuery([queryKeys.okrs, page], () => getOkrList(page), {
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

export const useOkrDetail = (id: number) => {
  const queryClient = useQueryClient();
  const { data: okrDetail, isLoading } = useQuery(
    [queryKeys.okrDetail, id],
    () => getOkrDetail(id),
    {
      retry: 0,
    }
  );

  const mutation = useMutation(
    (newKeyResult: KrBody) => {
      return createKeyResult(newKeyResult);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.okrDetail, id]);
      },
    }
  );
  return { okrDetail, isLoading, mutation };
};
