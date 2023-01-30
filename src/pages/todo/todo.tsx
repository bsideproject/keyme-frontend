import React, { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { useIsFetching, useIsMutating, useQueryClient } from "react-query";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import IMG_PLUS_BTN from "~assets/images/img_plus_btn.png";
import TodoModal from "~components/Modal/TodoModal";
import useModal from "~hooks/useModal";
import AllTab from "~pages/todo/All";
import { AddButton } from "~pages/todo/All/index.styles";
import CompletedTab from "~pages/todo/Completed";
import InProgressTab from "~pages/todo/InProgress";
import { routePath } from "~routes/index";
import { palette } from "~styles/palette";

import { todoModalAtom } from "../../recoil/atoms";

const Container = styled.div`
  width: 100%;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  text-align: right;
  .tab {
    a {
      color: #707070;
    }
    .on {
      a {
        border-bottom: none;
      }
      color: ${palette.primary} !important;
      font-weight: 700;
      border-bottom: 2px solid ${palette.primary};
    }
    width: 100%;
    padding: 10px 0;

    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #707070;
    letter-spacing: -0.005em;
    margin-bottom: 20px;

    > li {
      width: 33%;
      padding-bottom: 13px;
      text-align: center;
      border-bottom: 1px solid #efefef;
    }
  }
`;
const { ALL_TAB, IN_PROGRESS_TAB, COMPLETE_TAB } = routePath;

const todoListsTab = [
  { value: "in-progress", text: "진행 중", pathname: IN_PROGRESS_TAB },
  { value: "completed", text: "완료", pathname: COMPLETE_TAB },
  { value: "all", text: "전체", pathname: ALL_TAB },
];

function TodoLists() {
  const { ModalPortal, openModal, closeModal } = useModal();
  const [todoModal, setTodoModal] = useRecoilState(todoModalAtom);

  const [search] = useSearchParams();
  const queryTab = search.get("tab");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (todoModal) {
      openModal();
    } else {
      closeModal();
    }
  }, [todoModal]);

  useEffect(() => {
    if (!queryTab) {
      navigate(IN_PROGRESS_TAB);
    }
  }, []);

  return (
    <Container>
      <ul className="tab">
        {todoListsTab.map((item, i) => (
          <li
            key={i}
            className={classNames({ on: queryTab === item.value })}
            onClick={() => {
              if (queryTab === item.value) {
                return;
              }
              navigate(item.pathname);
              queryClient.resetQueries();
            }}>
            <Link className={classNames({ on: queryTab === item.value })} to={item.pathname}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {queryTab === "all" ? (
        <AllTab />
      ) : queryTab === "in-progress" ? (
        <InProgressTab />
      ) : (
        <CompletedTab />
      )}
      <AddButton
        isVisible={true}
        onClick={() => {
          setTodoModal(true);
        }}>
        <img src={IMG_PLUS_BTN} />
      </AddButton>

      <ModalPortal>
        <TodoModal
          closeModal={() => {
            setTodoModal(false);
          }}
        />
      </ModalPortal>
    </Container>
  );
}

export default TodoLists;
