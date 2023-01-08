import React from "react";

import { GrassBall, GrassBox } from "@styles/calendar";

interface cProps {
  category: Set<number>;
}

function Grass({ category }: cProps) {
  return (
    <GrassBox>
      {Array.from(category.values()).map((v, idx) => {
        return <GrassBall colorIdx={v} key={idx} />;
      })}
    </GrassBox>
  );
}

export default Grass;
