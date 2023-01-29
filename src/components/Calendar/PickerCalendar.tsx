import React, { useEffect, useState } from "react";
import { addMonths, startOfMonth, subMonths } from "date-fns";
import { endOfWeek, startOfWeek } from "date-fns";
import { endOfMonth } from "date-fns/esm";

import { PickerDays } from "./Days/PickerDays";
import { PickerHeader } from "./Header/PickerHeader";
import { RenderWeeks } from "./Weeks/Weeks";
import { PickerCalendarBox } from "./Calendar.styles";

interface cProps {
  pickedDate?: Date;
  setPickerDate: (params: Date) => void;
}

export const PickerCalendar = ({ pickedDate, setPickerDate }: cProps) => {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [weekCount, setWeekCount] = useState<number>(5);

  const prevMonth = () => {
    setCurrentDay(startOfMonth(subMonths(currentDay, 1)));
  };
  const nextMonth = () => {
    setCurrentDay(startOfMonth(addMonths(currentDay, 1)));
  };

  const onDateClick = (day: Date) => {
    setPickerDate(day);
  };

  useEffect(() => {
    setWeekCount(
      Math.ceil(
        (+endOfWeek(endOfMonth(currentDay)) - +startOfWeek(startOfMonth(currentDay))) /
          3600 /
          24 /
          7 /
          1000
      )
    );
  }, [currentDay]);

  return (
    <PickerCalendarBox weekCount={weekCount}>
      <PickerHeader currentDay={currentDay} prevMonth={prevMonth} nextMonth={nextMonth} />
      <RenderWeeks />
      <PickerDays currentDay={currentDay} pickedDate={pickedDate} onDateClick={onDateClick} />
    </PickerCalendarBox>
  );
};
