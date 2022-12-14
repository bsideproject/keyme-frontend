import React, { MouseEventHandler, useState } from "react";
import { addMonths, format, subMonths } from "date-fns";
import { endOfMonth, endOfWeek, startOfMonth, startOfWeek } from "date-fns";
import { addDays, isSameDay, isSameMonth } from "date-fns";

// import { Icon } from "@iconify/react";
import "./calendar.css";

interface cMonths {
  currentMonth: number | Date;
  prevMonth: MouseEventHandler;
  nextMonth: MouseEventHandler;
}
const RenderHeader = ({ currentMonth, prevMonth, nextMonth }: cMonths) => {
  return (
    <div className="header row">
      <div className="col col-start">
        <span className="text">
          <span className="text month">{format(currentMonth, "M")}월</span>
          {format(currentMonth, "yyyy")}
        </span>
      </div>
      <div className="col col-end">
        <span onClick={prevMonth}>이전</span>
        <span onClick={nextMonth}>다음</span>
        {/* <Icon icon="bi:arrow-left-circle-fill"  />
        <Icon icon="bi:arrow-right-circle-fill" /> */}
      </div>
    </div>
  );
};

const RenderDays = () => {
  const days = [];
  const date = ["Sun", "Mon", "Thu", "Wed", "Thrs", "Fri", "Sat"];

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col" key={i}>
        {date[i]}
      </div>
    );
  }

  return <div className="days row">{days}</div>;
};

interface rProps {
  currentMonth: number | Date;
  selectedDate: Date;
  onDateClick: (day: Date) => void;
}
const RenderCells = ({ currentMonth, selectedDate, onDateClick }: rProps) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      days.push(
        <div
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, selectedDate)
              ? "selected"
              : format(currentMonth, "M") !== format(day, "M")
              ? "not-valid"
              : "valid"
          }`}
          key={day.toString()}
          onClick={() => onDateClick(cloneDay)}>
          <span className={format(currentMonth, "M") !== format(day, "M") ? "text not-valid" : ""}>
            {formattedDate}
          </span>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day.toString()}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className="body">{rows}</div>;
};

export const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };
  return (
    <div className="calendar" role={"calendar"}>
      <RenderHeader currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />
      <RenderDays />
      <RenderCells
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </div>
  );
};
