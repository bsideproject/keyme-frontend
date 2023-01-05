import React, { useEffect, useState } from "react";

import { ReactComponent as IconPlus } from "@assets/icons/icoPlus.svg";
import useInput from "@hooks/useInput";
import { KrsBox, KrsCircle, KrsTitle, OkrKrs, OkrStatusFill } from "@styles/okr";

import "./okrDetail.css";

interface cprops {
  okrId: number;
  detailShow: boolean;
}

interface keyResultType {
  id: number;
  title: string;
  progress: number;
}

interface todoType {
  id: number;
  title: string;
}

function OkrDetail({ okrId, detailShow }: cprops) {
  // detailShow가 눌렸을 때 데이터를 받아와야함
  // to do list는 key result에 종속 -> key result 가져오고 to do list 가져오기
  const [keyResult, onChange, onReset, setInput] = useInput("");
  const [keyResults, setKeyResults] = useState<keyResultType[]>([]);
  const [todos, setTodos] = useState<todoType[]>([]);

  useEffect(() => {
    if (detailShow) {
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
        {
          id: 4,
          title: "헬스장 출석",
        },
        {
          id: 5,
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
                  <KrsTitle>{title}</KrsTitle>
                  <OkrStatusFill
                    style={{
                      backgroundColor: "#FF9494",
                      width: progress,
                    }}
                  />
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
