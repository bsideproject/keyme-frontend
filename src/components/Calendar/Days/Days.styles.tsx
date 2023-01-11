import styled from "styled-components";

import { CalendarCell } from "../Calendar.styles";

export const CalendarDays = styled.div`
  margin-top: 1rem;
  color: #222222;
  font-weight: bold;
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
