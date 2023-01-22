import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import { ReactComponent as IconO } from "~assets/icons/ico_O.svg";
import { ReactComponent as IconPlus } from "~assets/icons/ico_plus.svg";
import BaseHeader from "~components/BaseHeader/BaseHeader";
import OkrCreate from "~components/Modal/OkrCreate/OkrCreate";
import { useOkr } from "~hooks/queries/okr";
import { BasePage } from "~styles/page";
import { palette } from "~styles/palette";
import { KeyResultType } from "~types/okr";

import OkrDetail from "./okrDetail/okrDetail";
import {
  HeaderLeftSide,
  HeaderRightSide,
  HeaderSummary,
  NoOkrBox,
  OkrBox,
  OkrBoxHeader,
  OkrCategory,
  OkrCategoryHeader,
  OkrContainer,
  OkrDDay,
  OkrFooter,
  OkrTitle,
  OktAddBtn,
  OktBtnBox,
  Scoller,
} from "./okr.styles";

import "./circleProgressbar.css";

function Okr() {
  const { okrs } = useOkr();
  const [showModal, setShowModal] = useState(false);

  return (
    <BasePage id="okr">
      <BaseHeader text={"님의 OKR"} />
      <HeaderSummary isShow={okrs?.length ? true : false}>
        현재 진행중인 OKR은 {okrs?.length}개 입니다.
      </HeaderSummary>
      {/* OKR 컴포넌트 (목록식) */}
      <OkrContainer>
        {okrs === undefined || okrs.length === 0 ? (
          <NoOkrBox>아직 진행중인 OKR이 없어요.</NoOkrBox>
        ) : (
          okrs?.map(({ id, category, dday, title, progress, keyResults }) => {
            // const [detailShow, setDetailShow] = useState(false);
            // const [keyResults, setKeyResults] = useState<KeyResultType[]>([]);

            // useEffect(() => {
            //   if (detailShow) {
            //     // 데이터 가져오기
            //     setKeyResults([
            //       {
            //         id: 1,
            //         title: "테스트 커버리지 90% 달성",
            //         progress: 0,
            //       },
            //       {
            //         id: 2,
            //         title: "Spring boot 통합 테스트 병렬실행",
            //         progress: 44,
            //       },
            //       {
            //         id: 3,
            //         title: "마지막 키 리절트",
            //         progress: 100,
            //       },
            //     ]);
            //   } else {
            //     setTimeout(() => {
            //       setKeyResults([]);
            //     }, 500);
            //   }
            // }, [detailShow]);

            return (
              <OkrBox key={`o-${id}`}>
                <OkrBoxHeader>
                  <HeaderLeftSide>
                    <OkrCategoryHeader>
                      <OkrCategory colorIndex={0}>{category.title}</OkrCategory>
                      <OkrDDay>{dday ? `D-${dday}` : ""}</OkrDDay>
                    </OkrCategoryHeader>
                    <OkrTitle>
                      <IconO fill={palette.colors[0].main} /> <span>{title}</span>
                    </OkrTitle>
                  </HeaderLeftSide>
                  <HeaderRightSide>
                    <CircularProgressbar
                      styles={{ path: { stroke: palette.colors[0].main } }}
                      strokeWidth={20}
                      value={progress}
                      text={`${progress}%`}
                    />
                  </HeaderRightSide>
                </OkrBoxHeader>

                <OkrDetail
                  okrId={id}
                  colorIndex={0}
                  // okrDetail에서 받기
                  keyResults={keyResults}
                />
              </OkrBox>
            );
          })
        )}
      </OkrContainer>
      <OktBtnBox>
        <OktAddBtn
          onClick={() => {
            setShowModal(true);
          }}>
          <IconPlus stroke="white" /> &nbsp; OKR 만들기
        </OktAddBtn>
      </OktBtnBox>

      <OkrCreate showModal={showModal} setShowModal={setShowModal} />
    </BasePage>
  );
}

export default Okr;
