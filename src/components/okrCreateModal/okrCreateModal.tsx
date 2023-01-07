import React, { useEffect, useState } from "react";

import { ReactComponent as IconBack } from "@assets/icons/ico_back.svg";
import AlarmPopup from "@components/alarmPopup/alarmPopup";
import OkrCategoryModal from "@components/okrCreateModal/okrCategoryModal/okrCategoryModal";
import useInput from "@hooks/useInput";
import { OkrContainer, OkrModal, OkrModalHeader } from "@styles/modal";

import KeyResult from "./keyResult/keyResult";
import Objective from "./objective/objective";

interface cProps {
  showModal: boolean;
  setShowModal: (param: boolean) => void;
}

function OkrCreateModal({ showModal, setShowModal }: cProps) {
  const [modalAnim, setModalAnim] = useState<boolean>(true);

  const [title, onTitleChange, onReset] = useInput("");
  const [categoryId, setCategoryId] = useState<number>(-1);

  const resetInputs = () => {
    onReset();
    setCategoryId(-1);
  };

  const [showCategoryModal, setShowCategoryModal] = useState<boolean>(false);

  const [showNext, setShowNext] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const [isKeyReulst, setIsKeyResult] = useState<boolean>(false);

  const closeModal = () => {
    setShowPopup(false);
    setModalAnim(false);
    setShowNext(false);
    setTimeout(() => {
      resetInputs();
      setShowModal(false);
      setModalAnim(true);
      setIsKeyResult(false);
    }, 500);
  };

  useEffect(() => {
    if (showNext) {
      setIsKeyResult(true);
      setShowPopup(false);
    } else {
      closeModal();
    }
  }, [showNext]);

  const categories = [
    {
      id: 1,
      title: "업무",
      colorIndex: 0,
    },
    {
      id: 2,
      title: "건강",
      colorIndex: 1,
    },
    {
      id: 3,
      title: "관계",
      colorIndex: 2,
    },
    {
      id: 4,
      title: "배움",
      colorIndex: 3,
    },
    {
      id: 5,
      title: "여가",
      colorIndex: 4,
    },
    {
      id: 6,
      title: "기타",
      colorIndex: 5,
    },
  ];

  return (
    <OkrModal anim={modalAnim} showModal={showModal}>
      <OkrContainer anim={modalAnim}>
        <OkrModalHeader>
          <div>
            <IconBack onClick={closeModal} />
          </div>
          <span>OKR 만들기</span>
          <div></div>
        </OkrModalHeader>

        <Objective
          title={title}
          onTitleChange={onTitleChange}
          categoryId={categoryId}
          setCategoryId={setCategoryId}
          isKeyReulst={isKeyReulst}
          setShowPopup={setShowPopup}
          setShowCategoryModal={setShowCategoryModal}
          categories={categories}
        />

        <KeyResult
          title={title}
          categoryId={categoryId}
          categories={categories}
          isKeyReulst={isKeyReulst}
        />

        <OkrCategoryModal
          showModal={showCategoryModal}
          setShowModal={setShowCategoryModal}
          categories={categories}
        />
        <AlarmPopup showModal={showPopup} setState={setShowNext} />
      </OkrContainer>
    </OkrModal>
  );
}

export default OkrCreateModal;
