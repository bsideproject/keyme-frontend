import React from "react";

// import { useUser } from "@hooks/useUser";
import {
  KrsBox,
  KrsCircle,
  KrsTitle,
  OkrBox,
  OkrCategory,
  OkrContainer,
  OkrDDay,
  OkrDetailBtn,
  OkrFooter,
  OkrHeader,
  OkrKrs,
  OkrStatusBox,
  OkrStatusFill,
  OkrTitle,
  OktAddBtn,
  OktBtnBox,
} from "@styles/okr";

import "./okr.css";

function Okr() {
  const { user } = useUser();

  const okrList = [
    {
      id: 1,
      category: "업무",
      categoryColor: 1,
      title: "Objective",
      dDay: 90,
      krList: [
        {
          id: 1,
          title: "key result 1",
          isComplete: false,
        },
        {
          id: 2,
          title: "key result 2",
          isComplete: false,
        },
      ],
      progress: "64%",
    },
    {
      id: 2,
      category: "건강",
      categoryColor: 2,
      title: "안전한 테스트 익히기",
      dDay: 0,
      krList: [
        {
          id: 3,
          title: "테스트 커버리지 90% 달성",
          isComplete: false,
        },
        {
          id: 4,
          title: "Spring boot 통합 테스트 병렬실행",
          isComplete: false,
        },
      ],
      progress: "38%",
    },
    {
      id: 3,
      category: "기타",
      categoryColor: 3,
      title: "안전한 테스트 익히기",
      dDay: 365,
      krList: [
        {
          id: 5,
          title: "테스트 커버리지 90% 달성",
          isComplete: false,
        },
        {
          id: 6,
          title: "Spring boot 통합 테스트 병렬실행",
          isComplete: false,
        },
      ],
      progress: "92%",
    },
  ];

  const categoryColorPicker = ["#d9d9d9", "#f80000", "#ff9900"];

  const okrList = [
    {
      id: 1,
      category: "업무",
      categoryColor: 1,
      title: "Objective",
      dDay: 90,
      krList: [
        {
          id: 1,
          title: "key result 1",
          isComplete: false,
        },
        {
          id: 2,
          title: "key result 2",
          isComplete: false,
        },
      ],
      progress: "64%",
    },
    {
      id: 2,
      category: "건강",
      categoryColor: 2,
      title: "안전한 테스트 익히기",
      dDay: 0,
      krList: [
        {
          id: 3,
          title: "테스트 커버리지 90% 달성",
          isComplete: false,
        },
        {
          id: 4,
          title: "Spring boot 통합 테스트 병렬실행",
          isComplete: false,
        },
      ],
      progress: "38%",
    },
    {
      id: 3,
      category: "기타",
      categoryColor: 3,
      title: "안전한 테스트 익히기",
      dDay: 365,
      krList: [
        {
          id: 5,
          title: "테스트 커버리지 90% 달성",
          isComplete: false,
        },
        {
          id: 6,
          title: "Spring boot 통합 테스트 병렬실행",
          isComplete: false,
        },
      ],
      progress: "92%",
    },
  ];

  const categoryColorPicker = ["#d9d9d9", "#f80000", "#ff9900"];

  const okrList = [
    {
      id: 1,
      category: "업무",
      categoryColor: 1,
      title: "Objective",
      dDay: 90,
      krList: [
        {
          id: 1,
          title: "key result 1",
          isComplete: false,
        },
        {
          id: 2,
          title: "key result 2",
          isComplete: false,
        },
      ],
      progress: "64%",
    },
    {
      id: 2,
      category: "건강",
      categoryColor: 2,
      title: "안전한 테스트 익히기",
      dDay: 0,
      krList: [
        {
          id: 3,
          title: "테스트 커버리지 90% 달성",
          isComplete: false,
        },
        {
          id: 4,
          title: "Spring boot 통합 테스트 병렬실행",
          isComplete: false,
        },
      ],
      progress: "38%",
    },
    {
      id: 3,
      category: "기타",
      categoryColor: 3,
      title: "안전한 테스트 익히기",
      dDay: 365,
      krList: [
        {
          id: 5,
          title: "테스트 커버리지 90% 달성",
          isComplete: false,
        },
        {
          id: 6,
          title: "Spring boot 통합 테스트 병렬실행",
          isComplete: false,
        },
      ],
      progress: "92%",
    },
  ];

  const categoryColorPicker = ["#d9d9d9", "#f80000", "#ff9900"];

  return (
    <div id="okr">
      <div className="logo" role={"logo"}>
        로고
      </div>
      {/* <div>{user?.name}님의 OKR</div> */}
      <div>짐니님의 OKR</div>

      {/* OKR 컴포넌트 (목록식) */}
      <OkrContainer>
        {okrList.map(({ id, category, dDay, categoryColor, title, krList, progress }) => {
          return (
            <OkrBox key={id}>
              <OkrHeader>
                <OkrCategory style={{ backgroundColor: categoryColorPicker[categoryColor] }}>
                  {category}
                </OkrCategory>
                <OkrDDay>{dDay ? `D-${dDay}` : ""}</OkrDDay>
              </OkrHeader>

              <OkrTitle>{title}</OkrTitle>
              <OkrKrs>
                {/* key results 목록 */}
                {krList
                  ? krList.map(({ id, title, isComplete }) => {
                      return (
                        <KrsBox key={id}>
                          <KrsCircle style={{ backgroundColor: isComplete ? "#ff9494" : "" }}>
                            &nbsp;
                          </KrsCircle>
                          <KrsTitle>{title}</KrsTitle>
                        </KrsBox>
                      );
                    })
                  : ""}
              </OkrKrs>
              <OkrFooter>
                <OkrStatusBox>
                  <OkrStatusFill
                    style={{ backgroundColor: "#FF9494", width: progress }}></OkrStatusFill>
                </OkrStatusBox>
                <OkrDetailBtn>더보기</OkrDetailBtn>
              </OkrFooter>
            </OkrBox>
          );
        })}
      </OkrContainer>
      <OktBtnBox>
        <OktAddBtn>+ OKR 만들기</OktAddBtn>
      </OktBtnBox>

      {/* 생성 모달, Detail 페이지 이동? 그러면 애니메이션 넣을 수 없지않나 위에서 아래로, 현재 위치에서 펼쳐지는 느낌으로 해야함 */}
    </div>
  );
}

export default Okr;
