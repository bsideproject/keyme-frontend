import { FC } from "react";
import styled from "styled-components";

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
`;

interface Props {
  text: string;
  bgColor: string;
}

const TodoLabel: FC<Props> = ({ text, bgColor }) => {
  return <Container bgColor={bgColor}>{text}</Container>;
};

export default TodoLabel;
