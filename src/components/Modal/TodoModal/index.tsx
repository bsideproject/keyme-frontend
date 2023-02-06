import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Radio, RadioGroup } from "react-radio-group";
import { useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import IMG_CLOSE_BTN from "~assets/icons/ico_close2.svg";
import BaseButton from "~components/Button/BaseButton";
import TodoLabel from "~components/Label/TodoLabel";
import { changeQueryParameter } from "~components/Todo/TodoItems";
import { useCreateTodo, useGetKeyResults, useUpdateTodo } from "~hooks/queries/todo";
import useInput from "~hooks/useInput";
import useGetTodos from "~pages/todo/hooks";
import { bttanimation, ttbanimation } from "~styles/anim";
import { colorsMains, palette } from "~styles/palette";

import { editModeAtom, selectTodoAtom } from "../../../recoil/atoms";

const Container = styled.div<{ anim: boolean }>`
  position: absolute;
  max-width: 393px;
  width: 100%;
  background: #fff;
  height: 90%;
  z-index: 10000;
  bottom: 0px;

  animation: ${(props) => (props.anim === false ? ttbanimation : bttanimation)} 0.5s ease-in-out;

  box-sizing: border-box;
  .wrapper {
    padding: 0 20px;
    box-sizing: border-box;
  }
  .title {
    color: ${palette.font.black01};
    font-weight: 700;
    line-height: 21px;
    font-size: 18px;
  }
  .blue-text {
    color: ${palette.primary};
    font-weight: 400;
    font-size: 12px;
    margin-left: 5px;
  }

  .modal-header {
    background: #335bf0;
    height: 74px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    align-items: center;
    gap: 130px;
    img {
      width: 22px;
      height: 22px;
      padding-left: 22px;
      cursor: pointer;
    }
    > span {
      color: #fff;
      font-size: 22px;
      line-height: 26px;
      font-weight: 700;
    }
  }
  .todo-wrapper {
    margin: 24px 0;

    .todo-input {
      box-sizing: border-box;
      margin-top: 16px;
      width: 353px;
      font-size: 16px;
      font-weight: 500;
      resize: none;

      border: none;
      outline: none;
      height: 135px;
      background: #f8f8f8;
      border-radius: 10px;
      padding: 20px 20px 0 20px;
      &::placeholder {
        color: #909090;
      }
    }
  }
  .key-result-wrapper {
  }
  .key-result-box {
    box-sizing: border-box;
    height: 211px;
    background: #f6f8fe;
    border-radius: 10px;
    width: 353px;
    margin-top: 18px;
    padding: 15px 32px 15px 15px;
    overflow-y: auto;
    .key-result-lists {
      margin-top: 14px;
      .radio-group {
        display: flex;
        align-items: center;
        gap: 7px;
        margin-bottom: 18px;
      }
      .desc {
        font-weight: 500;
        font-size: 15px;
        color: ${palette.font.black01};
      }
    }
    .title {
      color: #707070;
      font-feature-settings: "case" on;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
    }
  }
`;

export type VoidFn = () => void;

interface ModalProps {
  closeModal: VoidFn;
}

const TodoModal: FC<ModalProps> = ({ closeModal }) => {
  const [search] = useSearchParams();

  const queryTab = search.get("tab");
  const { currentPage } = useGetTodos(changeQueryParameter(queryTab));

  const { keyResultLists } = useGetKeyResults();

  const [todoInput, onChangeTodoInput, resetTodo, setTodoInput] = useInput("");
  const [isOpen, setIsOpen] = useState(true);
  const { createTodoMutate, isLoading } = useCreateTodo();
  const [editMode, setEditMode] = useRecoilState(editModeAtom);
  const [selectTodo, setSelectTodo] = useRecoilState(selectTodoAtom);
  const [selectedKeyResult, setSelectKeyResult] = useState<number | null>(null);
  const { updateTodoMutate } = useUpdateTodo(changeQueryParameter(queryTab), currentPage);
  const addTodoSubmit = useCallback(() => {
    createTodoMutate({ title: todoInput, keyResultId: selectedKeyResult });
  }, [todoInput]);

  const updateTodoSubmit = () => {
    if (selectTodo) {
      updateTodoMutate({ title: todoInput, todoId: selectTodo.id, keyResultId: selectedKeyResult });
    }
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setEditMode(false);
        closeModal();
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    if (editMode && selectTodo) {
      setTodoInput(selectTodo?.title);
    }
  }, [editMode]);

  // useEffect(() => {
  //   if (keyResultLists?.length) {
  //     setSelectKeyResult(keyResultLists[0].id);
  //   }
  // }, [JSON.stringify(keyResultLists)]);

  return (
    <Container anim={isOpen}>
      <div className="modal-header">
        <img src={IMG_CLOSE_BTN} alt="modal close button" onClick={closeHandler} />
        <span>할 일</span>
      </div>
      <div className="wrapper">
        <div className="todo-wrapper">
          <div className="title flex-alignItems-center">
            To Do를 적어주세요. <span className="blue-text">(필수)</span>
          </div>

          <textarea
            placeholder="할 일을 적어주세요."
            className="todo-input"
            value={todoInput}
            onChange={onChangeTodoInput}
          />
        </div>

        <div className="key-result-wrapper">
          <div className="title flex-alignItems-center">
            연결하실 Key result를 선택하세요 <span className="blue-text">(선택)</span>
          </div>

          <div className="key-result-box">
            <div className="title">Key Result</div>
            <div className="key-result-lists">
              <RadioGroup
                selectedValue={selectedKeyResult && selectedKeyResult}
                onChange={(e) => {
                  setSelectKeyResult(e);
                }}>
                {keyResultLists?.length && (
                  <div className="radio-group">
                    <Radio value={null} style={{ transform: "scale(1.5)" }} />

                    <p className="desc">선택안함</p>
                  </div>
                )}

                {keyResultLists?.length &&
                  keyResultLists?.map((item) => {
                    return (
                      <div className="radio-group" key={item.id}>
                        <Radio value={item?.id} style={{ transform: "scale(1.5)" }} />
                        <TodoLabel
                          text={item?.category ? item?.category.title : ""}
                          bgColor={
                            item && item?.category ? colorsMains[item?.category.colorInt] : "#222"
                          }
                          isCompleted={false}
                        />
                        <p className="desc">{item.title}</p>
                      </div>
                    );
                  })}
                {/*<div className="radio-group">*/}
                {/*  <Radio value="건강" style={{ transform: "scale(1.5)" }} />*/}
                {/*  <TodoLabel text="건강" bgColor={palette.todo.yellow02} isCompleted={false} />*/}
                {/*  <p className="desc">6월까지 주 3회 헬스장 출석</p>*/}
                {/*</div>*/}

                {/*<div className="radio-group">*/}
                {/*  <Radio value="업무" style={{ transform: "scale(1.5)" }} />*/}
                {/*  <TodoLabel text="업무" bgColor={palette.todo.blue01} isCompleted={false} />*/}
                {/*  <p className="desc">6월까지 주 3회 헬스장 출석</p>*/}
                {/*</div>*/}

                {/*<div className="radio-group">*/}
                {/*  <Radio value="관계" style={{ transform: "scale(1.5)" }} />*/}
                {/*  <TodoLabel text="관계" bgColor={palette.todo.yellow02} isCompleted={false} />*/}
                {/*  <p className="desc">6월까지 주 3회 헬스장 출석</p>*/}
                {/*</div>*/}

                {/*<div className="radio-group">*/}
                {/*  <Radio value="배움" style={{ transform: "scale(1.5)" }} />*/}
                {/*  <TodoLabel text="배움" bgColor={palette.todo.yellow02} isCompleted={false} />*/}
                {/*  <p className="desc">6월까지 주 3회 헬스장 출석</p>*/}
                {/*</div>*/}
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>

      <BaseButton
        text="완료"
        background={palette.primary}
        width="353px"
        height="56px"
        position="absolute"
        bottom="50px"
        fontColor="#fff"
        fontSize="16px"
        borderRadius="10px"
        margin="0 20px"
        onSubmit={editMode ? updateTodoSubmit : addTodoSubmit}
      />
    </Container>
  );
};

export default TodoModal;
