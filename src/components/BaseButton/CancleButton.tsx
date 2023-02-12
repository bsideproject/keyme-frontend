import React from "react";

import { CancleBtn } from "~styles/base";

interface cProps {
  isAble: boolean;
  handleClick: () => void;
  text: string;
}

function CancleButton({ isAble, handleClick, text }: cProps) {
  return (
    <CancleBtn isAble={isAble} onClick={handleClick}>
      {text}
    </CancleBtn>
  );
}

export default CancleButton;
