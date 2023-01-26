import { useQuery } from "react-query";

import { getCalnedars } from "~api/calendar";
import { queryKeys } from "~utils/react-query/constant";

export const useCalendar = (month: number, year: number) => {
  const { data: calendars, isLoading } = useQuery(
    [queryKeys.calendars, { month, year }],
    () => getCalnedars({ month, year }),
    {
      retry: 0,
    }
  );

  return { calendars, isLoading };
};
