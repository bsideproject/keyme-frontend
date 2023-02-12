import React from "react";

import { ReactComponent as IconK } from "~assets/icons/ico_K.svg";
import ProgressSlider from "~components/ProgressSlider/ProgressSlider";
import { useOkrDetail } from "~hooks/queries/okr";
import useInput from "~hooks/useInput";
import { palette } from "~styles/palette";

import { KrsBox, KrsTitle, OkrDetailBox, OkrKrs } from "./okrDetail.styles";

interface cprops {
  detailShow: boolean;
  okrId: number;
  colorIndex: number;
}
function OkrDetail({ detailShow, okrId, colorIndex }: cprops) {
  const { okrDetail } = useOkrDetail(okrId);

  const [keyResult, onChange, onReset, setInput] = useInput("");

  return (
    <OkrDetailBox detailShow={detailShow}>
      <OkrKrs>
        {okrDetail?.keyResults?.length !== 0 ? (
          okrDetail?.keyResults?.map(({ id, title, progress }) => {
            const setProgress = (n: number) => {
              progress = n;
            };
            return (
              <KrsBox key={`kr-${id}`}>
                <KrsTitle>
                  <IconK fill={palette.colors[colorIndex].main} /> <span>{title}</span>
                </KrsTitle>

                <ProgressSlider
                  progress={progress}
                  setProgress={setProgress}
                  colorIndex={colorIndex}
                />
              </KrsBox>
            );
          })
        ) : (
          <div>key results가 없습니다.</div>
        )}
      </OkrKrs>
    </OkrDetailBox>
  );
}

export default OkrDetail;
