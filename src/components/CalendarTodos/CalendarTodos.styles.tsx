import styled from "styled-components";

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
