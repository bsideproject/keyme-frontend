import React, { useEffect, useState } from "react";

import { ReactComponent as IconPlus } from "~assets/icons/ico_plus.svg";
import useInput from "~hooks/useInput";
import { useOkrDetail } from "~hooks/useOkr";
import { KeyResultType } from "~types/okr";
import { TodoType } from "~types/todo";

import { OkrDetailStatusBox, OkrStatusFill } from "../okr.styles";

import {
  KrInputContainer,
  KrsBox,
  KrsTitle,
  OkrDetailBox,
  OkrKrs,
  OkrTodos,
  TodoBall,
  TodoBox,
} from "./okrDetail.styles";

interface cprops {
  okrId: number;
  keyResults: KeyResultType[];
  todos: TodoType[];
  detailShow: boolean;
  colorIndex: number;
}

function OkrDetail({ okrId, colorIndex, keyResults, todos, detailShow }: cprops) {
  const [detailAnim, setDetailAnim] = useState(false);
  const { okrDetail } = useOkrDetail(okrId);
  // detailShow가 눌렸을 때 데이터를 받아와야함 -> react query
  // to do list는 key result에 종속 -> key result 가져오고 to do list 가져오기
  const [keyResult, onChange, onReset, setInput] = useInput("");
  // okrId로 한번에 가져오기 가능 - react-query key:`okr-id`

  // height 계산식을 넣어서 동적으로 max-height animation 관리하면 좋을것같긴한데..

  return (
    <OkrDetailBox detailShow={detailShow}>
      <OkrKrs>
        {/* key results 목록 */}
        {okrDetail?.keyResults.map(({ id, title, progress }) => {
          const [value, setValue] = useState(progress);
          // const handleDrag = () => {
          //   setValue();
          // };

          return (
            <KrsBox key={`kr-${id}`}>
              <KrsTitle colorIndex={colorIndex}>
                <span>K</span> <span>{title}</span>
              </KrsTitle>
              <OkrDetailStatusBox>
                {/* 빈 곳을 클릭하든 이미 채워진 곳을 클릭하든, 위치정보 확인해서 상대적인 값으로 progress 변경해줘야함 */}
                {/* 보이지 않는 구슬을 넣어두고 클릭 시 drag 시작 */}
                {/* width를 계산하여 이동시킬때마다 데리고다님 */}
                {/* dragball element */}
                {/* 어딜 클릭하면 drag start 하고 놓으면 drag end, 살짝 누르면 바로 end 호출 */}
                <OkrStatusFill
                  // 드래그 시작 시 확대
                  // onDragStart={}
                  // 드래그 끝날 시 handleDrag
                  // onDragEnd={handleDrag}
                  colorIndex={colorIndex}
                  style={{
                    width: progress,
                  }}
                />
              </OkrDetailStatusBox>
            </KrsBox>
          );
        })}
        <KrInputContainer>
          <input
            type="text"
            name="keyResult"
            onChange={onChange}
            placeholder="Key Result 추가하기"
            // onkeypress = {handleKeyPress}
          />
          {/* onClick={} */}
          <IconPlus width={16} fill={"#D9D9D9"} />
        </KrInputContainer>
      </OkrKrs>

      <OkrTodos todoExists={todos.length === 0}>
        <hr />
        {okrDetail?.todos.map(({ id, title, isCompleted }) => {
          return (
            <TodoBox key={`todo-${id}`}>
              <div>
                <TodoBall isCompleted={isCompleted} />
                <div>{title}</div>
              </div>
            </TodoBox>
          );
        })}
      </OkrTodos>
    </OkrDetailBox>
  );
}

export default OkrDetail;
