import React, { useEffect, useState } from "react";

import { ReactComponent as IconDown } from "~assets/icons/ico_down.svg";
import { ReactComponent as IconK } from "~assets/icons/ico_K.svg";
import { ReactComponent as IconUp } from "~assets/icons/ico_up.svg";
import ProgressSlider from "~components/ProgressSlider/ProgressSlider";
import { useOkrDetail } from "~hooks/queries/okr";
import useInput from "~hooks/useInput";
import { palette } from "~styles/palette";
import { KeyResultType } from "~types/okr";

import { OkrFooter, Scoller } from "../okr.styles";

import { KrsBox, KrsTitle, OkrDetailBox, OkrKrs } from "./okrDetail.styles";

interface cprops {
  okrId: number;
  colorIndex: number;
  keyResults?: KeyResultType[];
}
function OkrDetail({ okrId, colorIndex, keyResults }: cprops) {
  const [detailAnim, setDetailAnim] = useState(false);
  const [detailShow, setDetailShow] = useState(false);
  // const [keyResults, setKeyResults] = useState<KeyResultType[] | undefined>([]);

  // // detailShow가 눌렸을 때 데이터를 받아와야함 -> react query
  // useEffect(() => {
  //   if (detailShow) {
  //     const { okrDetail } = useOkrDetail(okrId);
  //     setKeyResults(okrDetail?.keyResults);
  //   } else {
  //     setKeyResults([]);
  //   }
  // }, [detailShow]);

  const [keyResult, onChange, onReset, setInput] = useInput("");

  // height 계산식을 넣어서 동적으로 max-height animation 관리하면 좋을것같긴한데..

  return (
    <>
      <OkrDetailBox detailShow={detailShow}>
        <OkrKrs>
          {/* key results 목록 */}
          {keyResults?.length !== 0 ? (
            keyResults?.map(({ id, title, progress }) => {
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

      <OkrFooter>
        <Scoller onClick={() => setDetailShow(!detailShow)}>
          {detailShow ? (
            <>
              접기 <IconUp width={24} />
            </>
          ) : (
            <>
              더보기 <IconDown width={24} />
            </>
          )}
        </Scoller>
      </OkrFooter>
    </>
  );
}

export default OkrDetail;
