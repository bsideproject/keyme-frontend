import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import { Category } from "@api/categories";
import { ReactComponent as IconDown } from "@assets/icons/ico_down.svg";
import { ReactComponent as IconPlus } from "@assets/icons/ico_plus.svg";
import { ReactComponent as IconUp } from "@assets/icons/ico_up.svg";
import BaseHeader from "@components/baseHeader/baseHeader";
import OkrCreateModal from "@components/okrCreateModal/okrCreateModal";
import OkrDetail from "@components/okrDetail/okrDetail";
import { useOkr } from "@hooks/useOkr";
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
} from "@styles/okr";
import { BasePage } from "@styles/page";
import { palette } from "@styles/palette";

import "./circleProgressbar.css";

interface keyResultType {
  id: number;
  title: string;
  progress: number;
}

interface todoType {
  id: number;
  title: string;
}

function Okr() {
  // const { okrs } = useOkr();
  // test 용
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

  // const okrs: { id: number; category: Category; dDay: number; title: string; progress: number }[] =
  //   [];

  const [showModal, setShowModal] = useState(false);

  return (
    <BasePage id="okr">
      <BaseHeader text={"님의 OKR"} />
      <HeaderSummary isShow={okrs.length ? true : false}>
        현재 진행중인 OKR은 {okrs.length}개 입니다.
      </HeaderSummary>
      {/* OKR 컴포넌트 (목록식) */}
      <OkrContainer>
        {okrs === undefined || okrs.length === 0 ? (
          <NoOkrBox>아직 진행중인 OKR이 없어요.</NoOkrBox>
        ) : (
          okrs?.map(({ id, category, dDay, title, progress }) => {
            const [detailShow, setDetailShow] = useState(false);

            const [keyResults, setKeyResults] = useState<keyResultType[]>([]);
            const [todos, setTodos] = useState<todoType[]>([]);

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
                    progress: 100,
                  },
                  {
                    id: 3,
                    title: "마지막 키 리절트",
                    progress: 100,
                  },
                ]);
                setTodos([
                  {
                    id: 1,
                    title: "헬스장 출석",
                  },
                  {
                    id: 2,
                    title: "헬스장 출석",
                  },
                  {
                    id: 3,
                    title: "헬스장 출석",
                  },
                ]);
              } else {
                setTimeout(() => {
                  setKeyResults([]);
                  setTodos([]);
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
                    <OkrTitle colorIndex={category.colorIndex}>
                      <span>O</span> <span>{title}</span>
                    </OkrTitle>
                  </HeaderLeftSide>
                  <HeaderRightSide>
                    <CircularProgressbar
                      // color 받아서 넣기
                      styles={{ path: { stroke: palette.colors[category.colorIndex].main } }}
                      strokeWidth={20}
                      value={progress}
                      text={`${progress}%`}
                    />
                  </HeaderRightSide>
                </OkrBoxHeader>

                <OkrDetail
                  colorIndex={category.colorIndex}
                  keyResults={keyResults}
                  todos={todos}
                  detailShow={detailShow}
                />

                <OkrFooter>
                  <div
                    className="scroller"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#707070",
                      fontSize: "14px",
                    }}
                    onClick={() => setDetailShow(!detailShow)}>
                    {detailShow ? (
                      <>
                        접기 <IconUp width={24} />
                      </>
                    ) : (
                      <>
                        더보기 <IconDown width={24} />
                      </>
                    )}

                    {/* 올라갈 땐 0.5초 뒤 바뀌게 */}
                  </div>
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
          {/* display:flex gap: 1rem */}
          <IconPlus stroke="white" /> &nbsp; OKR 만들기
        </OktAddBtn>
      </OktBtnBox>

      <OkrCreateModal showModal={showModal} setShowModal={setShowModal} />
    </BasePage>
  );
}

export default Okr;
