import React from "react";

import {
  BaseBoxBody,
  BaseBoxContainer,
  BaseBoxHeader,
  BaseBoxItem,
  ItemBadge,
  ItemText,
} from "@styles/base";

interface cProps {
  colorIdx: number | undefined;
  info: {
    badgeType: string;
    badgeText: string | number;
    title: string;
  }[];
  title: string;
}

function BaseBox({ colorIdx, info, title }: cProps) {
  return (
    <BaseBoxContainer colorIdx={colorIdx}>
      <BaseBoxHeader>{title}</BaseBoxHeader>
      <BaseBoxBody>
        {info.map(({ badgeType, badgeText, title }, idx) => {
          return (
            <BaseBoxItem key={idx}>
              <ItemBadge colorIdx={colorIdx} className={`${badgeType}`}>
                {badgeText}
              </ItemBadge>
              <ItemText>{title}</ItemText>
            </BaseBoxItem>
          );
        })}
      </BaseBoxBody>
    </BaseBoxContainer>
  );
}

export default BaseBox;
