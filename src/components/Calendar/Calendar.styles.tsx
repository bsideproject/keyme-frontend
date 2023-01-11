import styled from "styled-components";

export const CalendarBox = styled.div<{ weekCount: number }>`
  height: ${(props) => (props.weekCount == 6 ? "409px" : "356px")};
  background-color: white;
  padding: 1rem 1rem 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
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
