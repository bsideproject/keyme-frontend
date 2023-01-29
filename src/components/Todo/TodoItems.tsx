import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useSearchParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import ICON_EDIT from "~assets/icons/ico_edit.svg";
import ICON_DELETE from "~assets/icons/icon_delete.svg";
import TodoBox from "~components/Box/TodoBox";
import TodoLabel from "~components/Label/TodoLabel";
import { useCompleteTodo, useDeleteTodo, useRollbackTodo } from "~hooks/queries/todo";
import useGetTodos from "~pages/todo/hooks";
import { CheckBoxInput, CheckBoxLabel } from "~pages/todo/InProgress/index.styles";
import { colorsMains } from "~styles/palette";
import { Todo, TodoType } from "~types/todo";

import { editModeAtom, selectTodoAtom, todoModalAtom } from "../../recoil/atoms";

export const changeQueryParameter = (query: string | null) => {
  switch (query) {
    case "in-progress":
      return "IN_PROGRESS";
    case "completed":
      return "COMPLETED";
    case "all":
      return "ALL";

    default:
      return "IN_PROGRESS";
  }
};

const TodoItems = (todo: Todo) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [search] = useSearchParams();

  const queryTab = search.get("tab");
  const { currentPage } = useGetTodos(changeQueryParameter(queryTab));

  const { completeTodoMutate } = useCompleteTodo(changeQueryParameter(queryTab), currentPage);
  const { rollbackTodoMutate } = useRollbackTodo(changeQueryParameter(queryTab), currentPage);
  const { deleteTodoMutate } = useDeleteTodo(changeQueryParameter(queryTab), currentPage);
  const setTodoModal = useSetRecoilState(todoModalAtom);

  const setEditMode = useSetRecoilState(editModeAtom);
  const setSelectedTodo = useSetRecoilState(selectTodoAtom);

  useEffect(() => {
    setIsCompleted(todo.isCompleted);
  }, [JSON.stringify(todo)]);

  return (
    <TodoBox>
      <div className="todo-inner">
        <CheckBoxLabel htmlFor={todo.category?.title || ""}>
          <CheckBoxInput
            type="checkbox"
            id={todo.category?.title || ""}
            name={todo.category?.title || ""}
            checked={isCompleted}
            onChange={(e) => {
              if (!todo.isCompleted) {
                completeTodoMutate(todo.id);
              } else {
                rollbackTodoMutate(todo.id);
              }
            }}
          />
        </CheckBoxLabel>
        <TodoLabel
          text={todo?.category?.title || ""}
          bgColor={todo && todo?.category ? colorsMains[todo?.category?.colorInt] : "#222"}
          isCompleted={isCompleted}
        />
      </div>
      <div className="todo-text">
        <p>{todo.title}</p>
      </div>

      <div className="bottom-tools">
        <span
          onClick={() => {
            setTodoModal(true);
            setEditMode(true);
            setSelectedTodo(todo);
          }}>
          <img src={ICON_EDIT} alt="" />
          수정
        </span>
        <span>
          <div className="line" />
        </span>
        <span
          onClick={() => {
            deleteTodoMutate(todo.id);
          }}>
          <img src={ICON_DELETE} alt="" />
          삭제
        </span>
      </div>
    </TodoBox>
  );
};

export default TodoItems;
