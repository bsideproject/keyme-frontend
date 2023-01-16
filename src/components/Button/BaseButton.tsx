import { FC } from "react";
import styled from "styled-components";

import { VoidFn } from "~components/Modal/AddTodoModal";

interface ButtonProps {
  text: string;
  background: string;
  width: string;
  height: string;
  fontColor: string;
  position?: string;
  bottom?: string;
  fontSize: string;
  borderRadius: string;
  margin: string;
  onSubmit?: VoidFn;
}

const ButtonContainer = styled.button<{
  bgColor: string;
  width: string;
  height: string;
  position?: string;
  bottom?: string;
  fontColor: string;
  fontSize: string;
  borderRadius: string;
  margin: string;
}>`
  background: ${(props) => props.bgColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom};
  color: ${(props) => props.fontColor};
  font-weight: 700;
  letter-spacing: -0.005em;
  border-radius: ${(props) => props.borderRadius};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
`;

const BaseButton: FC<ButtonProps> = ({
  position,
  bottom,
  text,
  background,
  width,
  height,
  fontColor,
  fontSize,
  borderRadius,
  margin,
  onSubmit,
}) => {
  return (
    <ButtonContainer
      onClick={onSubmit}
      bgColor={background}
      width={width}
      height={height}
      position={position}
      bottom={bottom}
      fontColor={fontColor}
      fontSize={fontSize}
      borderRadius={borderRadius}
      margin={margin}>
      {text}
    </ButtonContainer>
  );
};

export default BaseButton;
