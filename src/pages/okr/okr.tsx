import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import { ReactComponent as IconDown } from "~assets/icons/ico_down.svg";
import { ReactComponent as IconO } from "~assets/icons/ico_O.svg";
import { ReactComponent as IconPlus } from "~assets/icons/ico_plus.svg";
import { ReactComponent as IconUp } from "~assets/icons/ico_up.svg";
import BaseHeader from "~components/BaseHeader/BaseHeader";
import OkrCreate from "~components/Modal/OkrCreate/OkrCreate";
import { useOkr } from "~hooks/useOkr";
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
  // const { okrs } = useOkr();

  const okrs = [
    {
      id: 1,
      category: {
        title: "업무",
        colorIndex: 0,
      },
      dDay: 90,
      title: "업무 제목입니다. asdkfja sdkja sdkfjals dfkjwㅏㅇ 문장무니아",
      progress: 40,
    },
    {
      id: 2,
      category: {
        title: "건강",
        colorIndex: 1,
      },
      dDay: 90,
      title: "업무 제목입니다.",
      progress: 20,
    },
    {
      id: 3,
      category: {
        title: "여가",
        colorIndex: 4,
      },
      dDay: 90,
      title: "업무 제목입니다.",
      progress: 60,
    },
    {
      id: 4,
      category: {
        title: "관계",
        colorIndex: 2,
      },
      dDay: 90,
      title: "업무 제목입니다.",
      progress: 90,
    },
  ];
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
          okrs?.map(({ id, category, dDay, title, progress }) => {
            const [detailShow, setDetailShow] = useState(false);
            const [keyResults, setKeyResults] = useState<KeyResultType[]>([]);

            useEffect(() => {
              if (detailShow) {
                // 데이터 가져오기
                setKeyResults([
                  {
                    id: 1,
                    title: "테스트 커버리지 90% 달성",
                    progress: 0,
                  },
                  {
                    id: 2,
                    title: "Spring boot 통합 테스트 병렬실행",
                    progress: 44,
                  },
                  {
                    id: 3,
                    title: "마지막 키 리절트",
                    progress: 100,
                  },
                ]);
              } else {
                setTimeout(() => {
                  setKeyResults([]);
                }, 500);
              }
            }, [detailShow]);

            return (
              <OkrBox key={`o-${id}`}>
                <OkrBoxHeader>
                  <HeaderLeftSide>
                    <OkrCategoryHeader>
                      <OkrCategory colorIndex={category.colorIndex}>{category.title}</OkrCategory>
                      <OkrDDay>{dDay ? `D-${dDay}` : ""}</OkrDDay>
                    </OkrCategoryHeader>
                    <OkrTitle>
                      <IconO fill={palette.colors[category.colorIndex].main} /> <span>{title}</span>
                    </OkrTitle>
                  </HeaderLeftSide>
                  <HeaderRightSide>
                    <CircularProgressbar
                      styles={{ path: { stroke: palette.colors[category.colorIndex].main } }}
                      strokeWidth={20}
                      value={progress}
                      text={`${progress}%`}
                    />
                  </HeaderRightSide>
                </OkrBoxHeader>

                <OkrDetail
                  okrId={id}
                  colorIndex={category.colorIndex}
                  // okrDetail에서 받기
                  keyResults={keyResults}
                  detailShow={detailShow}
                />

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
