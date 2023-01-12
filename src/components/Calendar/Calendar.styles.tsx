import styled from "styled-components";

export const CalendarBox = styled.div<{ weekCount: number }>`
  height: ${(props) => (props.weekCount == 6 ? "409px" : "356px")};
  background-color: white;
  padding: 1rem 1rem 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const PickerCalendarBox = styled(CalendarBox)`
  height: ${(props) => (props.weekCount == 6 ? "236px" : "213px")};
  background-color: #f8f8f8;
  margin-top: 0.5rem;
  border-radius: 10px;
  padding: 1rem;
`;

export const CalendarRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CalendarCell = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;
