import React, { useEffect, useState } from "react";

import { ReactComponent as IconK } from "~assets/icons/ico_K.svg";
import ProgressSlider from "~components/ProgressSlider/ProgressSlider";
import useInput from "~hooks/useInput";
import { palette } from "~styles/palette";
// import { useOkrDetail } from "~hooks/useOkr";
import { KeyResultType } from "~types/okr";

import { KrsBox, KrsTitle, OkrDetailBox, OkrKrs } from "./okrDetail.styles";

interface cprops {
  okrId: number;
  keyResults: KeyResultType[];
  detailShow: boolean;
  colorIndex: number;
}
function OkrDetail({ okrId, colorIndex, keyResults, detailShow }: cprops) {
  const [detailAnim, setDetailAnim] = useState(false);
  // const { okrDetail } = useOkrDetail(okrId);
  // detailShow가 눌렸을 때 데이터를 받아와야함 -> react query
  const [keyResult, onChange, onReset, setInput] = useInput("");
  // okrId로 한번에 가져오기 가능 - react-query key:`okr-id`

  // height 계산식을 넣어서 동적으로 max-height animation 관리하면 좋을것같긴한데..

  return (
    <OkrDetailBox detailShow={detailShow}>
      <OkrKrs>
        {/* key results 목록 */}
        {keyResults?.map(({ id, title, progress }) => {
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
        })}
      </OkrKrs>
    </OkrDetailBox>
  );
}

export default OkrDetail;
