import React, { useState } from "react";

import BaseBox from "~components/Box/BaseBox";
import { useOkrDetail } from "~hooks/queries/okr";

import { OKRBody, OKRHeader } from "./OKR.styles";

interface cProps {
  okrId: number;
}

interface krListType {
  id: number;
  title: string;
}

function OKR({ okrId }: cProps) {
  const { okrDetail, mutation } = useOkrDetail(okrId);

  const [krList, setKrList] = useState<krListType[]>(
    okrDetail?.keyResults ? okrDetail?.keyResults : []
  );
  return (
    <OKRBody>
      <OKRHeader>
        <span>진행 중인 OKR을 수정해 보세요.</span>
      </OKRHeader>
      <BaseBox
        colorIdx={okrDetail?.category?.colorInt}
        info={[
          {
            badgeType: "text",
            badgeText: okrDetail?.category ? okrDetail?.category?.title : "",
            title: okrDetail ? okrDetail.title : "",
            // 날짜 넣기
          },
        ]}
        title={"Objective"}
      />

      {krList ? (
        Object.keys(krList).length === 0 ? (
          ""
        ) : (
          <BaseBox
            colorIdx={okrDetail?.category?.colorInt}
            info={krList.map(({ title }, idx) => {
              return {
                badgeType: "circle",
                badgeText: idx + 1,
                title,
              };
            })}
            title={"Key result"}
          />
        )
      ) : (
        ""
      )}
    </OKRBody>
  );
}

export default OKR;
