import React from "react";

import { ReactComponent as IconKey } from "@assets/icons/ico_key.svg";
import { useUser } from "@hooks/useUser";
import { HeaderBox, HeaderUser } from "@styles/base";

interface cProps {
  text: string;
}

function BaseHeader({ text }: cProps) {
  const { user } = useUser();
  return (
    <HeaderBox>
      <IconKey height={48} />
      <HeaderUser>
        {user?.name}
        {text}
      </HeaderUser>
    </HeaderBox>
  );
}

export default BaseHeader;
