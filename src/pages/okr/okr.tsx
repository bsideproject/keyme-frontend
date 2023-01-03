import React, { useEffect, useState } from "react";

import { ReactComponent as IconDown } from "@assets/icons/ico_down.svg";
import { ReactComponent as IconUp } from "@assets/icons/ico_up.svg";
import { ReactComponent as IconKey } from "@assets/icons/icoKey.svg";
import { ReactComponent as IconPlus } from "@assets/icons/icoPlus.svg";
import OkrCreateModal from "@components/okrCreateModal/okrCreateModal";
import OkrDetail from "@components/okrDetail/okrDetail";
import { useOkr } from "@hooks/useOkr";
import { useUser } from "@hooks/useUser";
import {
  OkrBox,
  OkrCategory,
  OkrCategoryHeader,
  OkrContainer,
  OkrContentBox,
  OkrDDay,
  OkrFooter,
  OkrHeader,
  OkrStatusBox,
  OkrStatusFill,
  OkrTitle,
  OktAddBtn,
  OktBtnBox,
} from "@styles/okr";

import "./okr.css";

function Okr() {
  const { user } = useUser();
  // const { okrs } = useOkr();
  // test 용
  const okrs = [
    {
      id: 1,
      category: {
        title: "업무",
        colorIndex: 1,
      },
      dDay: 90,
      title: "업무 제목입니다.",
      // 이거 빠질듯
      keyResults: [
        {
          id: 1,
          title: "키 리절트 입니다.",
          progress: 80,
        },
      ],
      progress: 40,
    },
    {
      id: 2,
      category: {
        title: "업무",
        colorIndex: 1,
      },
      dDay: 90,
      title: "업무 제목입니다.",
      // 이거 빠질듯
      keyResults: [
        {
          id: 1,
          title: "키 리절트 입니다.",
          progress: 80,
        },
      ],
      progress: 20,
    },
    {
      id: 3,
      category: {
        title: "업무",
        colorIndex: 1,
      },
      dDay: 90,
      title: "업무 제목입니다.",
      // 이거 빠질듯
      keyResults: [
        {
          id: 1,
          title: "키 리절트 입니다.",
          progress: 80,
        },
      ],
      progress: 60,
    },
    {
      id: 4,
      category: {
        title: "업무",
        colorIndex: 1,
      },
      dDay: 90,
      title: "업무 제목입니다.",
      // 이거 빠질듯
      keyResults: [
        {
          id: 1,
          title: "키 리절트 입니다.",
          progress: 80,
        },
      ],
      progress: 90,
    },
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <div id="okr">
      <OkrHeader>
        <div className="logo" role={"logo"}>
          <IconKey />
        </div>
        <div className="header-user">{user?.name}님의 OKR</div>
      </OkrHeader>
      {/* OKR 컴포넌트 (목록식) */}
      <OkrContainer>
        {okrs === undefined || okrs.length === 0 ? (
          // div no data box
          <div className="no-okr">아직 진행중인 OKR이 없어요.</div>
        ) : (
          okrs?.map(({ id, category, dDay, title, keyResults, progress }) => {
            const [detailShow, setDetailShow] = useState(false);
            // 둘다 동작하넹?
            // useEffect(() => {
            //   console.log("here");
            // }, [detailShow]);
            return (
              <OkrBox key={`o-${id}`}>
                <OkrCategoryHeader>
                  <OkrCategory colorIndex={category.colorIndex}>{category.title}</OkrCategory>
                  <OkrDDay>{dDay ? `D-${dDay}` : ""}</OkrDDay>
                </OkrCategoryHeader>

                <OkrContentBox>
                  <OkrTitle>{title}</OkrTitle>
                  {/* 0.5초 뒤 등장하게 */}
                  <OkrStatusBox style={{ display: detailShow ? "none" : "block" }}>
                    <OkrStatusFill
                      style={{ backgroundColor: "#FF9494", width: `${progress}%` }}></OkrStatusFill>
                  </OkrStatusBox>
                </OkrContentBox>

                <OkrDetail okrId={id} detailShow={detailShow} />

                <OkrFooter>
                  <div
                    className="scroller"
                    style={{ width: "100%", display: "flex", justifyContent: "center" }}
                    onClick={() => setDetailShow(!detailShow)}>
                    <IconDown width={24} style={{ display: detailShow ? "none" : "block" }} />
                    {/* 올라갈 땐 0.5초 뒤 바뀌게 */}
                    <IconUp width={24} style={{ display: detailShow ? "block" : "none" }} />
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
          <IconPlus /> &nbsp; OKR 만들기
        </OktAddBtn>
      </OktBtnBox>

      <OkrCreateModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Okr;
