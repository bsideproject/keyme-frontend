import React, { useEffect, useState } from "react";

import { ReactComponent as IconBack } from "~assets/icons/ico_back.svg";
import AlarmPopup from "~components/AlarmPopup/AlarmPopup";
import OkrCategoryModal from "~components/Modal/OkrCategory/OkrCategory";
import { useCategory } from "~hooks/queries/category";
import useInput from "~hooks/useInput";

import KeyResult from "./KeyResult/KeyResult";
import Objective from "./Objective/Objective";
import { OkrContainer, OkrModal, OkrModalHeader } from "./OkrCreate.styles";

interface cProps {
  showModal: boolean;
  setShowModal: (param: boolean) => void;
}

function OkrCreateModal({ showModal, setShowModal }: cProps) {
  const [modalAnim, setModalAnim] = useState<boolean>(true);

  const [title, onTitleChange, onReset] = useInput("");
  const [okrId, setOkrId] = useState(-1);
  const [categoryId, setCategoryId] = useState<number>(-1);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const resetInputs = () => {
    onReset();
    setCategoryId(-1);
  };

  const [showCategoryModal, setShowCategoryModal] = useState<boolean>(false);

  const [showNext, setShowNext] = useState<number>(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const [isKeyResult, setIsKeyResult] = useState<boolean>(false);

  const closeModal = () => {
    setShowNext(0);
    setShowPopup(false);
    setModalAnim(false);
    setTimeout(() => {
      resetInputs();
      setShowModal(false);
      setModalAnim(true);
      setIsKeyResult(false);
    }, 500);
  };

  useEffect(() => {
    if (showNext === 2) {
      setIsKeyResult(true);
      setShowPopup(false);
    } else if (showNext === 1) {
      closeModal();
    }
  }, [showNext]);

  const { categories } = useCategory();

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
          isKeyResult={isKeyResult}
          setShowPopup={setShowPopup}
          setShowCategoryModal={setShowCategoryModal}
          categories={categories}
          setOkrId={setOkrId}
          setDate={setDate}
        />

        <KeyResult
          okrId={okrId}
          title={title}
          date={date}
          nowCategory={categories?.filter(({ id }) => id === categoryId)[0]}
          isKeyResult={isKeyResult}
          closeModal={closeModal}
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
