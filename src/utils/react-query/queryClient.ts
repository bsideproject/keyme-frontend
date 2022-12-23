import { QueryClient } from "react-query";

export const generateQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        // useErrorBoundary: true, // 필요한 쿼리에 맞게 설정하면 될듯
      },
      mutations: {
        // useErrorBoundary: true,
      },
    },
  });
};

export const queryClient = generateQueryClient();
