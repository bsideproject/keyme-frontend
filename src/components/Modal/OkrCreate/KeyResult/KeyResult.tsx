import React, { useEffect, useState } from "react";

import { ReactComponent as IconInfo } from "~assets/icons/ico_info.svg";
import BaseButton from "~components/BaseButton/BaseButton";
import KrAddButton from "~components/BaseButton/KrAddButton";
import BaseBox from "~components/Box/BaseBox";
import { OkrModalFooter } from "~components/Modal/Modal.styles";
import OkrInfoModal from "~components/Modal/OkrInfo/OkrInfo";
import { useOkrDetail } from "~hooks/queries/okr";
import { useUser } from "~hooks/queries/user";
import useInput from "~hooks/useInput";
import { Category } from "~types/category";

import { OkrModalHeaderText, OkrObjectiveBox } from "../OkrCreate.styles";

import { KeyResultBody, KeyResultHeader } from "./KeyResult.styles";

interface cProps {
  okrId: number;
  title: string;
  nowCategory?: Category;
  date?: Date;
  isKeyResult: boolean;
  closeModal: () => void;
}

interface krListType {
  id: number;
  title: string;
}

function KeyResult({ okrId, title, date, nowCategory, isKeyResult, closeModal }: cProps) {
  const [krTitle, onKrTitleChange, onReset, setKrTitle] = useInput("");
  const [btnDisable, setBtnDisable] = useState<boolean>(false);
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

  const { user } = useUser();
  const { okrDetail, mutation } = useOkrDetail(okrId);

  const [krList, setKrList] = useState<krListType[]>(
    okrDetail?.keyResults ? okrDetail?.keyResults : []
  );

  const handleClick = () => {
    closeModal();
  };

  useEffect(() => {
    if (krList && Object.keys(krList).length === 0) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [krList]);

  const addKeyResult = () => {
    mutation.mutate(
      { objectiveId: okrId, title: krTitle },
      {
        onSuccess: (data) => {
          setKrList([...krList, { id: krList?.length, title: krTitle }]);
          onReset();
        },
      }
    );
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
    <KeyResultBody isKeyResult={isKeyResult}>
      <KeyResultHeader>
        <span>
          {user?.name}님, <br />
          방금 작성한 Objective를 달성하기 위한 Key result를 만들어볼까요?
        </span>
        <span style={{ flexBasis: "24px" }}>
          <IconInfo width={24} onClick={() => setShowInfoModal(true)} />
        </span>
      </KeyResultHeader>
      <BaseBox
        colorIdx={nowCategory?.colorIndex}
        info={[
          {
            badgeType: "text",
            badgeText: nowCategory ? nowCategory.title : "",
            title,
            // 날짜 넣기
          },
        ]}
        title={"Objective"}
      />

      {krList ? (
        Object.keys(krList).length === 0 ? (
          ""
        ) : (
          <BaseBox
            colorIdx={nowCategory?.colorIndex}
            info={krList.map(({ title }, idx) => {
              return {
                badgeType: "circle",
                badgeText: idx + 1,
                title,
              };
            })}
            title={"Key result"}
          />
        )
      ) : (
        ""
      )}

      <OkrModalHeaderText style={{ marginTop: "1rem" }}>Key result를 적어주세요</OkrModalHeaderText>
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
        <BaseButton isAble={btnDisable} handleClick={handleClick} text={"완료"} />
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
    </KeyResultBody>
  );
}

export default KeyResult;
