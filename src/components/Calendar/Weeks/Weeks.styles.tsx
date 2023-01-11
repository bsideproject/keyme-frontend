import styled from "styled-components";

import { CalendarCell, CalendarRow } from "../Calendar.styles";

export const CalendarWeeks = styled(CalendarRow)`
  margin-top: 1rem;
  font-size: 14px;
  padding: 2px;
  color: #707070;
`;

export const WeeksCell = styled(CalendarCell)<{ colorIdx: number }>`
  color: ${({ colorIdx }) => (colorIdx === 0 ? "#F14567" : colorIdx === 6 ? "#4284E8" : "")};
`;
