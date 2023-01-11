import React, { useEffect, useState } from "react";

import { ReactComponent as IconEdit } from "@assets/icons/ico_edit.svg";
import { ReactComponent as IconInfo } from "@assets/icons/ico_info.svg";
import BaseButton from "@components/BaseButton/BaseButton";
import { ModalCategoryBox, OkrModalFooter } from "@components/Modal/Modal.styles";
import OkrInfoModal from "@components/Modal/OkrInfo/OkrInfo";
import { useOkr } from "@hooks/useOkr";
import { useUser } from "@hooks/useUser";

import { OkrModalHeaderText, OkrObjectiveBox } from "../OkrCreate.styles";

import { OkrCreateCategory, OkrModalBody, OkrModalCategoryHeader } from "./Objective.styles";

import "./objective.css";

interface cProps {
  title: string;
  categoryId: number;
  setShowPopup: (param: boolean) => void;
  setShowCategoryModal: (param: boolean) => void;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setCategoryId: (param: number) => void;
  categories:
    | {
        id: number;
        title: string;
        colorIndex: number;
      }[]
    | undefined;
  isKeyReulst: boolean;
}

function Objective({
  title,
  onTitleChange,
  categoryId,
  setCategoryId,
  setShowPopup,
  setShowCategoryModal,
  categories,
  isKeyReulst,
}: cProps) {
  const [btnDisable, setBtnDisable] = useState<boolean>(false);

  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const { user } = useUser();
  const { mutation } = useOkr();

  useEffect(() => {
    if (!title || categoryId === -1) {
      setBtnDisable(false);
      return;
    } else {
      setBtnDisable(true);
    }
  }, [title, categoryId]);

  const addOkr = async () => {
    if (!title || categoryId === -1) {
      // 입력해주세요 알림 (toast)
      return;
    } else {
      // setOkrId -> 위에서 props로 가져오기
      const okrId = mutation.mutate({ title, categoryId });
      console.log(okrId);
      setShowPopup(true);
    }
  };
  const infoContent = () => <></>;

  return (
    <div style={{ paddingBottom: "110px", display: isKeyReulst ? "none" : "block" }}>
      <OkrModalBody>
        <div className="okr-objective-header">
          <span>{user?.name}님 어떤 목표를 가지고 계신가요?</span>
          <IconInfo onClick={() => setShowInfoModal(true)} />
        </div>

        <OkrModalCategoryHeader>
          <OkrModalHeaderText>Objective 카테고리를 선택해주세요</OkrModalHeaderText>
          <IconEdit onClick={() => setShowCategoryModal(true)} />
        </OkrModalCategoryHeader>
        <ModalCategoryBox>
          {categories?.map(({ id, title, colorIndex }) => {
            return (
              <OkrCreateCategory
                isPicked={id === categoryId}
                colorIdx={colorIndex}
                key={id}
                onClick={() => {
                  setCategoryId(id);
                }}>
                {title}
              </OkrCreateCategory>
            );
          })}
        </ModalCategoryBox>
        <OkrModalHeaderText>Objective를 적어주세요</OkrModalHeaderText>
        <OkrObjectiveBox>
          <textarea
            style={{ fontSize: 16, fontWeight: "medium" }}
            name="title"
            placeholder="100글자 내로 입력해주세요"
            onChange={onTitleChange}
            value={title}
          />
        </OkrObjectiveBox>
        <OkrModalFooter>
          <BaseButton isAble={btnDisable} handleClick={addOkr} text={"다음"} />
        </OkrModalFooter>
      </OkrModalBody>
      <OkrInfoModal
        title={"OKR 만들기 예시"}
        Content={infoContent}
        // 데이터 받아서 처리
        info={{
          category: "배움",
          objective: "안전한 테스트 익히기",
          keyResults: [
            {
              title: "테스트 커버리지 90% 달성",
            },
            {
              title:
                "Spring boot 통합 테스트 병렬실행아아머ㅣㄴ아러민아럼ㄴ이라ㅓㅁㄴㅇㄹ긴문장긴문장",
            },
          ],
        }}
        showModal={showInfoModal}
        setShowModal={setShowInfoModal}
      />
    </div>
  );
}

export default Objective;
