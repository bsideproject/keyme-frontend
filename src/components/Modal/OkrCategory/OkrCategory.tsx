import React, { useEffect, useState } from "react";

import { ReactComponent as IconClose } from "@assets/icons/ico_close2.svg";
import { ReactComponent as IconFin } from "@assets/icons/ico_fin.svg";
import { useCategory } from "@hooks/useCategory";
import useInput from "@hooks/useInput";
import { palette } from "@styles/palette";

import { ModalCategoryBox } from "../Modal.styles";

import {
  CategoryBody,
  CategoryColorBox,
  CategoryColorItem,
  CategoryContainer,
  CategoryExplainMain,
  CategoryExplainSub,
  CategoryHeader,
  CategoryModal,
  CategoryNameInput,
  CategoryTitle,
  ChangeCategory,
} from "./OkrCategory.styles";

interface cProps {
  showModal: boolean;
  setShowModal: (param: boolean) => void;
  categories:
    | {
        id: number;
        title: string;
        colorIndex: number;
      }[]
    | undefined;
}

function OkrCategoryModal({ showModal, setShowModal, categories }: cProps) {
  const [modalAnim, setModalAnim] = useState<boolean>(true);
  const [cloneCategories, setCloneCategories] = useState(categories);

  const [categoryName, onChange, onReset, setCategoryName] = useInput("");
  const [cateogryColor, setCategoryColor] = useState(0);
  const [categoryIdx, setCategoryIdx] = useState(-1);

  const { mutation } = useCategory();

  useEffect(() => {
    setCloneCategories(
      cloneCategories?.map((el, idx) => {
        return idx === categoryIdx
          ? {
              ...el,
              title: categoryName,
              colorIndex: cateogryColor,
            }
          : el;
      })
    );
  }, [categoryName, cateogryColor]);

  useEffect(() => {
    setCloneCategories(categories);
  }, [categories]);

  useEffect(() => {
    cloneCategories?.map((v, idx) => {
      if (idx === categoryIdx) {
        setCategoryName(v.title);
        setCategoryColor(v.colorIndex);
      }
    });
  }, [categoryIdx]);

  const closeModal = () => {
    setModalAnim(false);
    setTimeout(() => {
      onReset();
      setCategoryIdx(-1);
      setCategoryColor(0);
      setCloneCategories(categories);
      setShowModal(false);
      setModalAnim(true);
    }, 500);
  };

  // 완료 누를 시 함수
  const handleClick = () => {
    const changedCategories = [];
    if (categories && cloneCategories) {
      for (let i = 0; i < 6; i++) {
        if (
          categories[i].title !== cloneCategories[i].title ||
          categories[i].colorIndex !== cloneCategories[i].colorIndex
        ) {
          changedCategories.push({
            id: cloneCategories[i].id,
            body: { title: cloneCategories[i].title, colorIndex: cloneCategories[i].colorIndex },
          });
        }
      }
    }
    changedCategories.map((v) => {
      mutation.mutate(v);
    });

    console.log("category changed");
    closeModal();
  };

  return (
    <CategoryModal anim={modalAnim} showModal={showModal}>
      <CategoryContainer anim={modalAnim} showModal={showModal}>
        <CategoryHeader>
          <IconClose onClick={closeModal} />
          <CategoryTitle>카테고리 편집</CategoryTitle>
          <IconFin onClick={handleClick} />
        </CategoryHeader>
        <CategoryBody>
          <div>
            <CategoryExplainMain>카테고리를 수정할 수 있습니다.</CategoryExplainMain>
            <CategoryExplainSub>대표 카테고리는 6개까지 보여집니다.</CategoryExplainSub>
          </div>
          <ModalCategoryBox>
            {cloneCategories?.map(({ id, title, colorIndex }, idx) => {
              return (
                <ChangeCategory
                  isPicked={idx === categoryIdx}
                  colorIdx={colorIndex}
                  key={id}
                  onClick={() => {
                    setCategoryIdx(idx);
                  }}>
                  {title}
                </ChangeCategory>
              );
            })}
          </ModalCategoryBox>

          <CategoryExplainMain>카테고리 이름을 적어주세요.</CategoryExplainMain>
          <CategoryNameInput
            name="categoryName"
            type="text"
            placeholder="4글자 내로 입력해주세요"
            onChange={onChange}
            maxLength={4}
            value={categoryName}
          />

          <CategoryExplainMain>대표색을 골라주세요.</CategoryExplainMain>
          <CategoryColorBox>
            {palette.colors.map(({ main }, idx) => {
              return (
                <CategoryColorItem
                  key={`color-${idx}`}
                  isChecked={idx === cateogryColor}
                  bgColor={main}
                  onClick={() => setCategoryColor(idx)}>
                  &nbsp;
                </CategoryColorItem>
              );
            })}
          </CategoryColorBox>
        </CategoryBody>
      </CategoryContainer>
    </CategoryModal>
  );
}

export default OkrCategoryModal;
