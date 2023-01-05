import React, { useState } from "react";

import { ReactComponent as IconClose } from "@assets/icons/ico_close2.svg";
import { ReactComponent as IconFin } from "@assets/icons/ico_fin.svg";
import useInput from "@hooks/useInput";
import {
  CategoryBody,
  CategoryColorBox,
  CategoryColorItem,
  CategoryContainer,
  CategoryExplainMain,
  CategoryExplainSub,
  CategoryHeader,
  CategoryModal,
  CategoryTitle,
} from "@styles/modal";
import { OkrCategoryBox, OkrModalCategory } from "@styles/okr";

import "./okrCategoryModal.css";

interface cProps {
  showModal: boolean;
  setShowModal: (param: boolean) => void;
  categories: {
    id: number;
    title: string;
    colorIndex: number;
  }[];
}

function OkrCategoryModal({ showModal, setShowModal, categories }: cProps) {
  const [categoryName, onChange, onReset, setCategoryName] = useInput("");
  const [cateogryColor, setCategoryColor] = useState(0);
  const [categoryId, setCategoryId] = useState(-1);
  const colors = [
    "#4284E8",
    "#EE8235",
    "#F14567",
    "#51E660",
    "#36E2E3",
    "#BE67E6",
    "#F4B026",
    "#DE2F95",
    "#604EDB",
    "#707070",
  ];
  return (
    <CategoryModal showModal={showModal}>
      <CategoryContainer showModal={showModal}>
        <CategoryHeader>
          <IconClose onClick={() => setShowModal(false)} />
          <CategoryTitle>카테고리 편집</CategoryTitle>
          <IconFin onClick={() => console.log("category changed")} />
        </CategoryHeader>
        <CategoryBody>
          <div>
            <CategoryExplainMain>카테고리를 수정할 수 있습니다.</CategoryExplainMain>
            <CategoryExplainSub>대표 카테고리는 6개까지 보여집니다.</CategoryExplainSub>
          </div>
          <OkrCategoryBox>
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
          <div className="category-name-container">
            <CategoryExplainMain>카테고리 이름을 적어주세요.</CategoryExplainMain>
            <input
              className="category-name-input"
              name="categoryName"
              type="text"
              placeholder="4글자 내로 입력해주세요"
              onChange={onChange}
              maxLength={4}
            />
          </div>

          <div className="category-color-container">
            <CategoryExplainMain>대표색을 골라주세요.</CategoryExplainMain>
            <CategoryColorBox>
              {colors.map((v, idx) => {
                return (
                  <CategoryColorItem
                    key={`color-${idx}`}
                    isChecked={idx === cateogryColor}
                    bgColor={v}
                    onClick={() => setCategoryColor(idx)}>
                    &nbsp;
                  </CategoryColorItem>
                );
              })}
            </CategoryColorBox>
          </div>
        </CategoryBody>
      </CategoryContainer>
    </CategoryModal>
  );
}

export default OkrCategoryModal;
