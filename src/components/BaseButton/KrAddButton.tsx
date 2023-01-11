import React from "react";

import { ReactComponent as IconPlus } from "@assets/icons/ico_plus.svg";
import { KrAddBtn } from "@styles/base";

interface cProps {
  isAble: boolean;
  handleClick: () => void;
  text: string;
}

function KrAddButton({ isAble, handleClick, text }: cProps) {
  return (
    <KrAddBtn isAble={isAble} onClick={handleClick}>
      <IconPlus stroke="#335bf0" /> &nbsp; {text}
    </KrAddBtn>
  );
}

export default KrAddButton;
