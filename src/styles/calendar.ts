import styled from "styled-components";

import { BasePage } from "./page";

export const CalendarPage = styled(BasePage)`
  padding: 0 0 90px;
  background-color: #f6f8fe;
  min-height: 788px;
  box-sizing: border-box;
`;

export const CalendarBox = styled.div<{ weekCount: number }>`
  height: ${(props) => (props.weekCount == 6 ? "409px" : "356px")};
  background-color: white;
  padding: 1rem 1rem 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const CalendarHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 3rem;
  box-sizing: border-box;
`;

export const CalendarMonth = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const CalendarRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CalendarWeeks = styled(CalendarRow)`
  margin-top: 1rem;
  font-size: 14px;
  padding: 2px;
  color: #707070;
`;

export const CalendarDays = styled.div`
  margin-top: 1rem;
  color: #222222;
  font-weight: bold;
`;

const CalendarCell = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

export const WeeksCell = styled(CalendarCell)<{ colorIdx: number }>`
  color: ${({ colorIdx }) => (colorIdx === 0 ? "#F14567" : colorIdx === 6 ? "#4284E8" : "")};
`;

// 날짜 셀
export const DaysCell = styled(CalendarCell)`
  flex-direction: column;
  gap: 5px;
`;

// 날짜 부분
export const DaysDay = styled.div<{ isSameDay: boolean; isSameMonth: boolean }>`
  width: 28px;
  height: 28px;
  border-radius: 50px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ isSameMonth, isSameDay }) => (isSameMonth ? (isSameDay ? "white" : "") : "#c2c2c2")};
  background-color: ${({ isSameDay, isSameMonth }) => (isSameMonth && isSameDay ? "#335BF0" : "")};
`;

// Todo 부분
export const DaysTodoBox = styled.div`
  min-height: 12px;
  margin-bottom: 0.5rem;
`;

import { palette } from "./palette";

export const GrassBox = styled.div`
  width: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2.5px;
`;

export const GrassBall = styled.div<{ colorIdx: number }>`
  flex-basis: 5px;
  height: 5px;
  border-radius: 20px;
  margin-bottom: 1px;
  background-color: ${(props) => palette.colors[props.colorIdx].main};
`;

// calendarTodos

export const CalendarTodoBox = styled.div`
  padding: 1rem 1rem 0;
`;

export const CalendarTodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
`;

export const HeaderDatePart = styled.div`
  flex-basis: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const DateDay = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
export const DateWeek = styled.div`
  font-size: 14px;
`;

export const HeaderSummaryPart = styled.div`
  flex: 1;
  font-size: 13px;
  color: #707070;
`;

export const CompleteBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const CompleteHeader = styled.div<{ colorIdx: number }>`
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => palette.colors[props.colorIdx].main};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 15px;
`;

export const CompleteBody = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: white;
  padding: 1rem 1rem 0;
`;

export const CompleteList = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const TodoSymbol = styled.div<{ colorIdx: number }>`
  width: 7px;
  height: 7px;
  border-radius: 20px;
  background-color: ${(props) => palette.colors[props.colorIdx].main};
`;

export const TodoText = styled.div`
  font-size: 15px;
`;
