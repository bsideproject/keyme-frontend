import styled from "styled-components";

export const CalendarHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 3rem;
  box-sizing: border-box;
`;

export const PickerCalendarHeader = styled(CalendarHeader)`
  justify-content: space-between;
  padding: 0 1rem;
`;

export const CalendarMonth = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const PickerCalendarMonth = styled(CalendarMonth)`
  font-size: 18px;
`;
