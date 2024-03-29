import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BottomNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: white;

  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 393px;
  height: 90px;

  padding: 0;
  z-index: 100;

  border-top: 1px solid #efefef;
  box-sizing: border-box;
`;

export const NavigationLink = styled(NavLink)`
  width: 96px;
  color: #2c3e50;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  margin-top: 1rem;

  svg {
    fill: #c4c4c4;
  }

  &.active {
    color: #335bf0;
  }

  &.active svg {
    fill: #335bf0;
  }
`;

export const NavigationText = styled.span`
  font-size: 13px;
  font-weight: bold;
`;
