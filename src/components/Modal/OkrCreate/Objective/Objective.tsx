import React, { useEffect, useState } from "react";

import { ReactComponent as IconEdit } from "~assets/icons/ico_edit.svg";
import { ReactComponent as IconInfo } from "~assets/icons/ico_info.svg";
import BaseButton from "~components/BaseButton/BaseButton";
import DatePicker from "~components/DatePicker/DatePicker";
import { ModalCategoryBox, OkrModalFooter } from "~components/Modal/Modal.styles";
import OkrInfoModal from "~components/Modal/OkrInfo/OkrInfo";
import { useOkr } from "~hooks/queries/okr";
import { useUser } from "~hooks/queries/user";
import { Category } from "~types/category";

import { OkrModalHeaderText, OkrObjectiveBox } from "../OkrCreate.styles";

import {
  ObjectiveHeader,
  OkrCreateCategory,
  OkrModalBody,
  OkrModalCategoryHeader,
} from "./Objective.styles";

interface cProps {
  title: string;
  categoryId: number;
  setShowPopup: (param: boolean) => void;
  setShowCategoryModal: (param: boolean) => void;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setCategoryId: (param: number) => void;
  setOkrId: (param: number) => void;
  setDate: (param: Date | undefined) => void;
  categories?: Category[];
  isKeyResult: boolean;
}

function Objective({
  title,
  onTitleChange,
  setDate,
  categoryId,
  setCategoryId,
  setShowPopup,
  setShowCategoryModal,
  setOkrId,
  categories,
  isKeyResult,
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
      mutation.mutate(
        { title, categoryId },
        {
          onSuccess: (data) => {
            setOkrId(data.data.id);
          },
        }
      );
      setShowPopup(true);
    }
  };
  const infoContent = () => <></>;

  return (
    <div style={{ display: isKeyResult ? "none" : "block" }}>
      <OkrModalBody>
        {/* header sticky? */}
        <ObjectiveHeader>
          <span>{user?.name}님 어떤 목표를 가지고 계신가요?</span>
          <IconInfo onClick={() => setShowInfoModal(true)} />
        </ObjectiveHeader>

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
                  setCategoryId(id ? id : 0);
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

        <DatePicker setDate={setDate} />

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
              title: "Spring boot 통합 테스트 병렬실행",
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
