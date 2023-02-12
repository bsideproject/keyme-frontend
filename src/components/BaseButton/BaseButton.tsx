import React from "react";

import { BaseBtn } from "~styles/base";

interface cProps {
  isAble: boolean;
  handleClick: () => void;
  text: string;
}

function BaseButton({ isAble, handleClick, text }: cProps) {
  return (
    <BaseBtn isAble={isAble} onClick={handleClick}>
      {text}
    </BaseBtn>
  );
}

export default BaseButton;
