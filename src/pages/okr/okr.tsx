import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import { ReactComponent as IconDown } from "~assets/icons/ico_down.svg";
import { ReactComponent as IconO } from "~assets/icons/ico_O.svg";
import { ReactComponent as IconPlus } from "~assets/icons/ico_plus.svg";
import { ReactComponent as IconUp } from "~assets/icons/ico_up.svg";
import BaseHeader from "~components/BaseHeader/BaseHeader";
import OkrCreate from "~components/Modal/OkrCreate/OkrCreate";
import { useOkr } from "~hooks/queries/okr";
import { BasePage } from "~styles/page";
import { palette } from "~styles/palette";
import { OKRType } from "~types/okr";

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
  const [currentPage, setCurrentPage] = useState(1);
  const { okrs } = useOkr(currentPage);
  const [myOkrs, setMyOkrs] = useState<OKRType[] | undefined>([]);
  const [showModal, setShowModal] = useState(false);

  const [detailShows, setDetailShows] = useState<boolean[]>([]);

  useEffect(() => {
    if (myOkrs && okrs) {
      setMyOkrs([...myOkrs, ...okrs]);
    }
    if (detailShows && okrs) {
      setDetailShows([...detailShows, ...okrs.map((v) => false)]);
    }
  }, [okrs]);

  return (
    <BasePage id="okr">
      <BaseHeader text={"님의 OKR"} />
      <HeaderSummary isShow={okrs?.length ? true : false}>
        현재 진행중인 OKR은 {okrs?.length}개 입니다.
      </HeaderSummary>
      {/* OKR 컴포넌트 (목록식) */}
      <OkrContainer>
        {myOkrs === undefined || myOkrs.length === 0 ? (
          <NoOkrBox>아직 진행중인 OKR이 없어요.</NoOkrBox>
        ) : (
          myOkrs?.map(({ id, category, dday, title, progress }, idx) => {
            return (
              <OkrBox key={`o-${id}-${idx}`}>
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
                {detailShows ? (
                  detailShows[idx] ? (
                    <OkrDetail okrId={id} colorIndex={0} detailShow={detailShows[idx]} />
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}

                <OkrFooter>
                  <Scoller
                    onClick={() =>
                      setDetailShows(
                        detailShows?.map((v, jdx) => {
                          return idx === jdx ? !v : v;
                        })
                      )
                    }>
                    {detailShows ? (
                      detailShows[idx] ? (
                        <>
                          접기 <IconUp width={24} />
                        </>
                      ) : (
                        <>
                          더보기 <IconDown width={24} />
                        </>
                      )
                    ) : (
                      ""
                    )}
                  </Scoller>
                </OkrFooter>
              </OkrBox>
            );
          })
        )}
      </OkrContainer>
      <OktAddBtn onClick={() => setCurrentPage(currentPage + 1)}>+ 더보기</OktAddBtn>
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
