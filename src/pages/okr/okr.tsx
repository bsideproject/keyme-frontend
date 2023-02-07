import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import { ReactComponent as IconEdit } from "~assets/icons/ico_edit.svg";
import { ReactComponent as IconO } from "~assets/icons/ico_O.svg";
import { ReactComponent as IconPlus } from "~assets/icons/ico_plus.svg";
import { ReactComponent as IconUp } from "~assets/icons/ico_up.svg";
import { ReactComponent as IconDelete } from "~assets/icons/icon_delete.svg";
import BaseHeader from "~components/BaseHeader/BaseHeader";
import DoubleCheck from "~components/Modal/DoubleCheck/DoubleCheck";
import OkrCreate from "~components/Modal/OkrCreate/OkrCreate";
import OkrUpdateModal from "~components/Modal/OkrUpdate/OkrUpdate";
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
  const [showDoubleCheck, setShowDoubleCheck] = useState<boolean>(false);
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
  const [okrId, setOkrID] = useState(-1);

  useEffect(() => {
    if (myOkrs && okrs) {
      setMyOkrs([...myOkrs, ...okrs]);
    }
    if (detailShows && okrs) {
      setDetailShows([...detailShows, ...okrs.map(() => false)]);
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
                <OkrBoxHeader
                  onClick={() => {
                    setDetailShows(
                      detailShows?.map((v, jdx) => {
                        return idx === jdx && !v ? !v : v;
                      })
                    );
                  }}>
                  <HeaderLeftSide>
                    <OkrCategoryHeader>
                      <OkrCategory colorIndex={category.colorInt}>{category.title}</OkrCategory>
                      <OkrDDay>{dday ? `D-${dday}` : ""}</OkrDDay>
                    </OkrCategoryHeader>
                    <OkrTitle>
                      <IconO fill={palette.colors[category.colorInt].main} /> <span>{title}</span>
                    </OkrTitle>
                  </HeaderLeftSide>
                  <HeaderRightSide>
                    <CircularProgressbar
                      styles={{ path: { stroke: palette.colors[category.colorInt].main } }}
                      strokeWidth={20}
                      value={progress}
                      text={""}
                    />
                  </HeaderRightSide>
                </OkrBoxHeader>
                {detailShows ? (
                  detailShows[idx] ? (
                    <>
                      <OkrDetail
                        okrId={id}
                        colorIndex={category.colorInt}
                        detailShow={detailShows[idx]}
                      />
                      <OkrFooter>
                        <Scoller
                          onClick={() =>
                            setDetailShows(
                              detailShows?.map((v, jdx) => {
                                return idx === jdx ? false : v;
                              })
                            )
                          }>
                          간략히 보기 <IconUp width={24} />
                        </Scoller>
                        <Scoller
                          onClick={() => {
                            setOkrID(id);
                            setShowUpdateModal(true);
                          }}>
                          수정하기 &nbsp; <IconEdit width={20} />
                        </Scoller>

                        <Scoller
                          onClick={() => {
                            setShowDoubleCheck(true);
                          }}>
                          삭제하기 &nbsp; <IconDelete width={20} />
                        </Scoller>
                      </OkrFooter>
                    </>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </OkrBox>
            );
          })
        )}
      </OkrContainer>
      {okrs?.length !== 0 ? (
        <OktAddBtn onClick={() => setCurrentPage(currentPage + 1)}>+ 더보기</OktAddBtn>
      ) : (
        ""
      )}

      <OktBtnBox>
        <OktAddBtn
          onClick={() => {
            setShowModal(true);
          }}>
          <IconPlus stroke="white" /> &nbsp; OKR 만들기
        </OktAddBtn>
      </OktBtnBox>

      {showModal ? <OkrCreate showModal={showModal} setShowModal={setShowModal} /> : ""}
      {showDoubleCheck ? <DoubleCheck setShowModal={setShowDoubleCheck} /> : ""}
      {showUpdateModal ? (
        <OkrUpdateModal
          okrId={okrId}
          showModal={showUpdateModal}
          setShowModal={setShowUpdateModal}
        />
      ) : (
        ""
      )}
    </BasePage>
  );
}

export default Okr;
