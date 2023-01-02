import React, { useState } from "react";

import iconKey from "@assets/icons/icoKey.svg";
import { ReactComponent as IconPlus } from "@assets/icons/icoPlus.svg";
import OkrCreateModal from "@components/okrModal/okrModal";
import { useOkr } from "@hooks/useOkr";
import { useUser } from "@hooks/useUser";
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
  const { okrs } = useOkr();

  const [showModal, setShowModal] = useState(false);

  return (
    <div id="okr">
      <OkrHeader>
        <div className="logo" role={"logo"}>
          <img src={iconKey} alt="" />
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
            return (
              <OkrBox key={id}>
                <OkrHeader>
                  <OkrCategory colorIndex={category.colorIndex}>{category.title}</OkrCategory>
                  <OkrDDay>{dDay ? `D-${dDay}` : ""}</OkrDDay>
                </OkrHeader>

                <OkrTitle>{title}</OkrTitle>
                {/* Detail 페이지 이동? 그러면 애니메이션 넣을 수 없지않나 위에서 아래로, 현재 위치에서 펼쳐지는 느낌으로 */}
                <OkrKrs>
                  {/* key results 목록 */}
                  {keyResults
                    ? keyResults.map(({ id, title, progress }) => {
                        return (
                          <KrsBox key={id}>
                            <KrsCircle
                              style={{
                                backgroundColor: progress === 100 ? "#ff9494" : "",
                                display: progress === 0 ? "block" : "none",
                              }}>
                              &nbsp;
                            </KrsCircle>
                            <KrsTitle>{title}</KrsTitle>
                            <OkrStatusBox style={{ display: progress === 0 ? "none" : "flex" }}>
                              <OkrStatusFill
                                style={{
                                  backgroundColor: "#FF9494",
                                  width: progress,
                                }}></OkrStatusFill>
                            </OkrStatusBox>
                          </KrsBox>
                        );
                      })
                    : ""}
                </OkrKrs>

                {/* todo list는 컴포넌트 분리해야 할듯 -> okrId로 받아오기.. */}
                {/* <div
                  className="okrTodos"
                  style={{ display: todoList.length === 0 ? "none" : "block" }}>
                  <hr style={{ margin: "1rem 0" }} />
                  {todoList.map(({ id, title }) => {
                    return (
                      <div
                        key={`todo-${id}`}
                        style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>{title}</div>
                        <div>수정</div>
                      </div>
                    );
                  })}
                </div> */}
                <OkrFooter>
                  {/* todo list length로 체크 */}
                  <OkrStatusBox style={{ display: keyResults.length === 0 ? "flex" : "none" }}>
                    <OkrStatusFill
                      style={{ backgroundColor: "#FF9494", width: progress }}></OkrStatusFill>
                  </OkrStatusBox>
                  {keyResults.length === 0 ? (
                    <OkrDetailBtn
                      onClick={() => {
                        console.log("here");
                        //getDetail(id)
                      }}>
                      더보기
                    </OkrDetailBtn>
                  ) : (
                    <OkrDetailBtn
                      onClick={() => {
                        console.log("here");
                        // resetDetail(id);
                      }}>
                      숨기기
                    </OkrDetailBtn>
                  )}
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
