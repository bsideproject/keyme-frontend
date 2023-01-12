import React, { useEffect, useState } from "react";

import { ReactComponent as IconPlus } from "@assets/icons/ico_plus.svg";

import useInput from "~hooks/useInput";
import { KeyResultType } from "~types/okr";
import { TodoType } from "~types/todo";

import {
  KrsBox,
  KrsCircle,
  KrsTitle,
  OkrDetailStatusBox,
  OkrKrs,
  OkrStatusFill,
} from "../okr.styles";

import "./okrDetail.css";

interface cprops {
  okrId: number;
  keyResults: KeyResultType[];
  todos: TodoType[];
  detailShow: boolean;
  colorIndex: number;
}

function OkrDetail({ okrId, colorIndex, keyResults, todos, detailShow }: cprops) {
  const [detailAnim, setDetailAnim] = useState(false);
  // detailShow가 눌렸을 때 데이터를 받아와야함 -> react query
  // to do list는 key result에 종속 -> key result 가져오고 to do list 가져오기
  const [keyResult, onChange, onReset, setInput] = useInput("");
  // okrId로 한번에 가져오기 가능 - react-query key:`okr-id`

  return (
    <div
      id="okr-detail"
      style={{
        maxHeight: detailShow ? "5000px" : 0,
        transition: "max-height 0.5s ease-in-out",
        overflow: "hidden",
      }}>
      <OkrKrs>
        {/* key results 목록 */}
        {keyResults
          ? keyResults.map(({ id, title, progress }) => {
              return (
                <KrsBox key={`kr-${id}`}>
                  <KrsTitle colorIndex={colorIndex}>
                    <span>K</span> <span>{title}</span>
                  </KrsTitle>
                  {/* 프로그레스 바 밑으로 이동 */}
                  <OkrDetailStatusBox>
                    <OkrStatusFill
                      colorIndex={colorIndex}
                      style={{
                        width: progress,
                      }}
                    />
                  </OkrDetailStatusBox>
                </KrsBox>
              );
            })
          : ""}
        <div className="okr-input-container">
          <input
            className="okr-detail-input"
            type="text"
            name="keyResult"
            onChange={onChange}
            placeholder="Key Result 추가하기"
            // onkeypress = {handleKeyPress}
          />
          {/* onClick={} */}
          <IconPlus width={16} fill={"#D9D9D9"} />
        </div>
      </OkrKrs>

      <div className="okrTodos" style={{ display: todos.length === 0 ? "none" : "block" }}>
        <hr style={{ margin: "1rem 0" }} />
        {todos.map(({ id, title }) => {
          return (
            <div
              key={`todo-${id}`}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "0.5rem",
              }}>
              <div style={{ display: "flex", gap: "1rem" }}>
                <KrsCircle style={{ backgroundColor: "#ff9494" }} />
                <div>{title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OkrDetail;
