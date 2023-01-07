import React, { useEffect, useState } from "react";

import { ReactComponent as IconInfo } from "@assets/icons/ico_info.svg";
import BaseBox from "@components/baseBox/baseBox";
import BaseButton from "@components/baseButton/baseButton";
import KrAddButton from "@components/baseButton/krAddButton";
import OkrInfoModal from "@components/okrCreateModal/okfInfoModal/okrInfoModal";
import useInput from "@hooks/useInput";
import { OkrModalFooter, OkrModalHeaderText, OkrObjectiveBox } from "@styles/okr";

import "./keyResult.css";

interface cProps {
  title: string;
  categoryId: number;
  categories: {
    id: number;
    title: string;
    colorIndex: number;
  }[];
  isKeyReulst: boolean;
}

interface krListType {
  id: number;
  title: string;
}

function KeyResult({ title, categoryId, categories, isKeyReulst }: cProps) {
  const [krTitle, onKrTitleChange, onReset, setKrTitle] = useInput("");
  const [btnDisable, setBtnDisable] = useState<boolean>(false);
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

  const [krList, setKrList] = useState<krListType[]>([]);

  useEffect(() => {
    if (Object.keys(krList).length === 0) {
      setBtnDisable(false);
      return;
    } else {
      setBtnDisable(true);
    }
  }, [krList]);

  const addKeyResult = () => {
    // axios 요청 후 id 값 받기 -> 애초에 react query 쓸거임..
    setKrList([...krList, { id: krList.length, title: krTitle }]);
    onReset();
  };

  const infoContent = () => (
    <div>
      <div>
        Key result는 <strong style={{ fontWeight: "bold" }}>핵심결과 지표</strong>입니다.
      </div>
      <div>구체적인 수치로 작성해주세요!</div>
    </div>
  );

  return (
    <div
      className="keyresult-body"
      style={{ paddingBottom: "200px", display: isKeyReulst ? "flex" : "none" }}>
      <div className="okr-objective-header">
        {/* 이름으로 변경 */}
        <span>
          키미님, <br />
          방금 작성한 Objective를 달성하기 위한 Key result를 만들어볼까요?
        </span>
        <IconInfo style={{ flexBasis: "24px" }} onClick={() => setShowInfoModal(true)} />
      </div>
      {categoryId === -1 ? (
        ""
      ) : (
        <BaseBox
          colorIdx={categories[categoryId].colorIndex}
          info={[
            {
              badgeType: "text",
              badgeText: categories[categoryId].title,
              title,
            },
          ]}
          title={"Objective"}
        />
      )}

      {Object.keys(krList).length === 0 ? (
        ""
      ) : (
        <BaseBox
          colorIdx={categories[categoryId].colorIndex}
          info={krList.map(({ title }, idx) => {
            return {
              badgeType: "circle",
              badgeText: idx + 1,
              title,
            };
          })}
          title={"Key result"}
        />
      )}

      <OkrModalHeaderText>Key result를 적어주세요</OkrModalHeaderText>
      <OkrObjectiveBox>
        <textarea
          name="krTitle"
          placeholder="100글자 내로 입력해주세요"
          onChange={onKrTitleChange}
          value={krTitle}
        />
      </OkrObjectiveBox>

      <OkrModalFooter>
        <KrAddButton isAble={krTitle !== ""} handleClick={addKeyResult} text={"Key result 추가"} />
        {/* <BaseButton isAble={btnDisable} handleClick={} text={"완료"} /> */}
      </OkrModalFooter>
      <OkrInfoModal
        title={"Key result 예시"}
        Content={infoContent}
        info={{
          category: "",
          objective: "",
          keyResults: [
            {
              title: "6월까지 주 3회 헬스장 출석",
            },
            {
              title: "고객 피드백 평점 85% 달성",
            },
            {
              title: "1월 31일까지 새로운 사이트에서 20명의 클라이언트를 대상으로 사용자 테스트",
            },
          ],
        }}
        showModal={showInfoModal}
        setShowModal={setShowInfoModal}
      />
    </div>
  );
}

export default KeyResult;
