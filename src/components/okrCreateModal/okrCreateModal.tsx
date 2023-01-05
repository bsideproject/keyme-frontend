import React, { useEffect, useState } from "react";

import { ReactComponent as IconBack } from "@assets/icons/ico_back.svg";
import { ReactComponent as IconEdit } from "@assets/icons/ico_edit.svg";
import { ReactComponent as IconInfo } from "@assets/icons/ico_info.svg";
import AlarmPopup from "@components/alarmPopup/alarmPopup";
import OkrInfoModal from "@components/okfInfoModal/okrInfoModal";
import OkrCategoryModal from "@components/okrCategoryModal/okrCategoryModal";
import useInput from "@hooks/useInput";
import { useOkr } from "@hooks/useOkr";
import {
  OkrAnimContainer,
  OkrBtnCreate,
  OkrBtnSkip,
  OkrCategoryBox,
  OkrCreationBg,
  OkrModal,
  OkrModalBody,
  OkrModalCategory,
  OkrModalCategoryHeader,
  OkrModalFooter,
  OkrModalHeader,
  OkrModalHeaderText,
  OkrObjectiveBox,
} from "@styles/okr";

import "./okrCreateModal.css";

interface cProps {
  showModal: boolean;
  setShowModal: (param: boolean) => void;
}

function OkrCreateModal({ showModal, setShowModal }: cProps) {
  const [title, onTitleChange, onReset] = useInput("");
  const [categoryId, setCategoryId] = useState<number>(-1);
  const [modalAnim, setModalAnim] = useState<boolean>(true);
  const [btnDisable, setBtnDisable] = useState<boolean>(false);
  const { mutation } = useOkr();

  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [showCategoryModal, setShowCategoryModal] = useState<boolean>(false);

  const [showNext, setShowNext] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const [isKeyReulst, setIsKeyResult] = useState<boolean>(false);

  // keyresult로 넘어갈시 만든 okr 초기화하면 안됨, 그대로가져가야함

  const closeModal = () => {
    onReset();
    setCategoryId(-1);

    //
    setModalAnim(false);
    setTimeout(() => {
      setShowModal(false);
      setModalAnim(true);
      setIsKeyResult(false);
    }, 500);
  };

  useEffect(() => {
    setShowPopup(false);
    if (showNext) {
      setIsKeyResult(true);
    } else {
      closeModal();
    }
  }, [showNext]);

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
      mutation.mutate({ title, categoryId });
      setShowPopup(true);
      // closeModal();
    }
  };

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
    <OkrCreationBg
      anim={modalAnim}
      display={showModal ? "block" : "none"}
      className={`okr-creation-bg`}>
      <OkrAnimContainer>
        <OkrModal anim={modalAnim}>
          <OkrModalHeader>
            <div>
              <IconBack onClick={closeModal} />
            </div>
            <span>OKR 만들기</span>
            <div></div>
          </OkrModalHeader>

          <OkrModalBody style={{ display: isKeyReulst ? "none" : "flex" }}>
            <div className="okr-objective-header">
              {/* user name으로 수정 */}
              <span>키미님 어떤 목표를 가지고 계신가요?</span>
              <IconInfo onClick={() => setShowInfoModal(true)} />
            </div>

            <OkrModalCategoryHeader>
              <OkrModalHeaderText>Objective 카테고리를 선택해주세요</OkrModalHeaderText>
              <div className="okr-category-setting">
                <IconEdit onClick={() => setShowCategoryModal(true)} />
              </div>
            </OkrModalCategoryHeader>
            <OkrCategoryBox>
              {/* category 받아오기 */}
              {categories.map(({ id, title, colorIndex }) => {
                return (
                  <OkrModalCategory
                    isPicked={id === categoryId}
                    colorIndex={colorIndex}
                    key={id}
                    onClick={() => {
                      setCategoryId(id);
                    }}>
                    {title}
                  </OkrModalCategory>
                );
              })}
            </OkrCategoryBox>
            <OkrModalHeaderText>Objective를 적어주세요</OkrModalHeaderText>
            <OkrObjectiveBox>
              <textarea
                // type="text"
                name="title"
                placeholder="100글자 내로 입력해주세요"
                onChange={onTitleChange}
                value={title}
              />
            </OkrObjectiveBox>
            <OkrModalFooter>
              <OkrBtnCreate
                isAble={btnDisable}
                // className="okr-btn okr-btn-create"
                onClick={() => addOkr()}>
                다음
              </OkrBtnCreate>
              <OkrBtnSkip>목표설정 skip</OkrBtnSkip>
            </OkrModalFooter>
          </OkrModalBody>
          <div style={{ display: isKeyReulst ? "block" : "none" }}>keyresult 페이지</div>
        </OkrModal>
      </OkrAnimContainer>
      <OkrInfoModal showModal={showInfoModal} setShowModal={setShowInfoModal} />
      <OkrCategoryModal
        showModal={showCategoryModal}
        setShowModal={setShowCategoryModal}
        categories={categories}
      />

      <AlarmPopup showModal={showPopup} setShowModal={setShowPopup} setState={setShowNext} />

      {/* Key Result 생성하는 페이지 */}
    </OkrCreationBg>
  );
}

export default OkrCreateModal;
