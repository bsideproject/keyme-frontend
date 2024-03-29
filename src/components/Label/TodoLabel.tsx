import { FC } from "react";
import styled from "styled-components";

import ICON_LINK from "~assets/icons/ico_link.svg";
import { colorsMains } from "~styles/palette";

const Container = styled.div<{ bgColor: string }>`
  width: 50px;
  height: 34px;
  background: ${(props) => props.bgColor};
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.005rem;
  color: #fff;
  position: relative;
  > img {
    position: absolute;
    left: 11px;
    top: -10px;
    cursor: pointer;
    //transform: translate(4px, -5px);
  }
`;

interface Props {
  text: string;
  bgColor: string;
  isCompleted: boolean;
  onClick?: () => void;
}

const TodoLabel: FC<Props> = ({ text, bgColor, isCompleted, onClick }) => {
  return (
    <Container
      bgColor={isCompleted ? "#DADADA" : bgColor}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}>
      {" "}
      {text ? text : <img src={ICON_LINK} />}
    </Container>
  );
};

export default TodoLabel;
