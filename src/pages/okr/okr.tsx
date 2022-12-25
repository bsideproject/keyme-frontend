import React, { useEffect, useState } from "react";

import useInput from "@hooks/useInput";
import { useUser } from "@hooks/useUser";
import {
  KrsBox,
  KrsCircle,
  KrsTitle,
  OkrBox,
  OkrCategory,
  OkrContainer,
  OkrCreationBg,
  OkrDDay,
  OkrDetailBtn,
  OkrFooter,
  OkrHeader,
  OkrKrs,
  OkrModal,
  OkrStatusBox,
  OkrStatusFill,
  OkrTitle,
  OktAddBtn,
  OktBtnBox,
} from "@styles/okr";

import "./okr.css";

// okr 생성 모달 -> 오른쪽에서 왼쪽으로 ? 아래에서 위로 ? animation

interface okrType {
  id: number;
  category: string;
  categoryColor: number;
  title: string;
  dDay: number | Date;
  krList: krTodoType[];
  todoList: krTodoType[];
  progress: string;
}

interface krTodoType {
  id: number;
  title: string;
  isComplete: boolean;
  progress: string;
}

function Okr() {
  const { user } = useUser();

  const [object, onObjectChange, onReset, setObject] = useInput("");
  const [category, setCategory] = useState("");

  const [showModal, setShowModal] = useState(false);

  const addOkr = () => {
    if (!category || !object) {
      // 입력해주세요 알림
      return;
    } else {
      setOkrList([
        ...okrList,
        {
          id: okrList.length + 1,
          category: category,
          categoryColor: 2,
          title: object,
          dDay: 90,
          krList: [],
          todoList: [],
          progress: "33%",
        },
      ]);
      // okrList.push();

      setShowModal(false);
      onReset();
      setCategory("");
    }
  };

  const getDetail = (id: number) => {
    const idx = okrList?.findIndex((x) => x.id === id);
    const items = [...okrList];
    const item = { ...items[idx] };
    item.krList = item.krList.map((kr) => {
      kr.progress = "30%";
      return kr;
    });

    item.todoList = [
      {
        id: 1,
        title: "todoList",
        isComplete: false,
        progress: "30%",
      },
    ];
    items[idx] = item;
    setOkrList([...items]);
  };

  const resetDetail = (id: number) => {
    const idx = okrList?.findIndex((x) => x.id === id);
    const items = [...okrList];
    const item = { ...items[idx] };
    item.krList = [...item.krList.slice(0, 2)];
    item.krList = item.krList.map((kr) => {
      kr.progress = "";
      return kr;
    });
    item.todoList = [];
    items[idx] = item;
    setOkrList([...items]);
  };

  const [okrList, setOkrList] = useState<okrType[]>([
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
          progress: "",
        },
        {
          id: 2,
          title: "key result 2",
          isComplete: false,
          progress: "",
        },
      ],
      todoList: [],
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
          progress: "",
        },
        {
          id: 4,
          title: "Spring boot 통합 테스트 병렬실행",
          isComplete: false,
          progress: "",
        },
      ],
      todoList: [],
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
          progress: "",
        },
        {
          id: 6,
          title: "Spring boot 통합 테스트 병렬실행",
          isComplete: false,
          progress: "",
        },
      ],
      todoList: [],
      progress: "92%",
    },
  ]);

  // const okrList = ;

  const categoryColorPicker = ["#d9d9d9", "#f80000", "#ff9900"];

  return (
    <div id="okr">
      <div className="logo" role={"logo"}>
        로고
      </div>
      <div>{user?.name}님의 OKR</div>
      {/* <div>짐니님의 OKR</div> */}

      {/* OKR 컴포넌트 (목록식) */}
      <OkrContainer>
        {okrList.map(({ id, category, dDay, categoryColor, title, krList, todoList, progress }) => {
          return (
            <OkrBox key={id}>
              <OkrHeader>
                <OkrCategory style={{ backgroundColor: categoryColorPicker[categoryColor] }}>
                  {category}
                </OkrCategory>
                <OkrDDay>{dDay ? `D-${dDay}` : ""}</OkrDDay>
              </OkrHeader>

              <OkrTitle>{title}</OkrTitle>
              {/* Detail 페이지 이동? 그러면 애니메이션 넣을 수 없지않나 위에서 아래로, 현재 위치에서 펼쳐지는 느낌으로 */}
              <OkrKrs>
                {/* key results 목록 */}
                {krList
                  ? krList.map(({ id, title, isComplete, progress }) => {
                      return (
                        <KrsBox key={id}>
                          <KrsCircle
                            style={{
                              backgroundColor: isComplete ? "#ff9494" : "",
                              display: progress === "" ? "block" : "none",
                            }}>
                            &nbsp;
                          </KrsCircle>
                          <KrsTitle>{title}</KrsTitle>
                          <OkrStatusBox style={{ display: progress === "" ? "none" : "flex" }}>
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
              <div
                className="okrTodos"
                style={{ display: todoList.length === 0 ? "none" : "block" }}>
                <hr style={{ margin: "1rem 0" }} />
                {todoList.map(({ id, title, isComplete }) => {
                  return (
                    <div
                      key={`todo-${id}`}
                      style={{ display: "flex", justifyContent: "space-between" }}>
                      <div>{title}</div>
                      <div>수정</div>
                    </div>
                  );
                })}
              </div>
              <OkrFooter>
                <OkrStatusBox style={{ display: todoList.length === 0 ? "flex" : "none" }}>
                  <OkrStatusFill
                    style={{ backgroundColor: "#FF9494", width: progress }}></OkrStatusFill>
                </OkrStatusBox>
                {todoList.length === 0 ? (
                  <OkrDetailBtn onClick={() => getDetail(id)}>더보기</OkrDetailBtn>
                ) : (
                  <OkrDetailBtn onClick={() => resetDetail(id)}>숨기기</OkrDetailBtn>
                )}
              </OkrFooter>
            </OkrBox>
          );
        })}
      </OkrContainer>
      <OktBtnBox>
        <OktAddBtn
          onClick={() => {
            setShowModal(true);
          }}>
          + OKR 만들기
        </OktAddBtn>
      </OktBtnBox>

      {/* 생성 모달 -> 데이터 추가 */}
      <OkrCreationBg
        className={`okr-creation-bg`}
        style={{ display: showModal ? "block" : "none" }}>
        <div className="okr-anim-container">
          <OkrModal className={`okr-creation-modal`}>
            <div className="okr-creation-header">
              <div
                onClick={() => {
                  setShowModal(false);
                }}>
                back
              </div>
              <span>OKR 만들기</span>
              <div>임시저장</div>
            </div>

            <div className="okr-creation-body">
              <div className="okr-creation-text">어떤 목표를 가지고 계신가요? 편집</div>
              <div className="okr-category-box">
                {["건강", "관계", "여가", "배움", "배움", "기타"].map((v, idx) => {
                  return (
                    <div
                      className="okr-category"
                      key={idx}
                      onClick={() => {
                        setCategory(v);
                      }}
                      style={{ backgroundColor: v === category ? "#d9d9d9" : "#ffffff" }}>
                      {v}
                    </div>
                  );
                })}
              </div>
              <div className="okr-copy-box">&nbsp;</div>

              <div className="okr-object-input">
                | &nbsp;
                <input
                  type="text"
                  name="object"
                  placeholder="Objective를 적어주세요."
                  onChange={onObjectChange}
                  value={object}
                />
              </div>

              <div className="okr-btn-container">
                <div className="okr-btn okr-btn-skip">목표설정 skip</div>
                <div
                  className="okr-btn okr-btn-create"
                  onClick={() => {
                    addOkr();
                  }}>
                  + 목표 추가
                </div>
              </div>
            </div>
          </OkrModal>
        </div>
      </OkrCreationBg>
    </div>
  );
}

export default Okr;
