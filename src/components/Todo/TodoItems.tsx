import React, { useEffect, useState } from "react";

import ICON_EDIT from "~assets/icons/ico_edit.svg";
import ICON_DELETE from "~assets/icons/icon_delete.svg";
import TodoBox from "~components/Box/TodoBox";
import TodoLabel from "~components/Label/TodoLabel";
import { TodoItem } from "~pages/todo/hooks";
import { CheckBoxInput, CheckBoxLabel } from "~pages/todo/InProgress/index.styles";

const TodoItems = (todo: TodoItem) => {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setIsCompleted(todo.isCompleted);
  }, []);

  return (
    <TodoBox>
      <div className="todo-inner">
        <CheckBoxLabel htmlFor={todo.labelText}>
          <CheckBoxInput
            type="checkbox"
            id={todo.labelText}
            name={todo.labelText}
            checked={isCompleted}
            onChange={(e) => {
              setIsCompleted(!isCompleted);
            }}
          />
        </CheckBoxLabel>
        <TodoLabel text={todo.labelText} bgColor={todo.labelColor} isCompleted={isCompleted} />
      </div>
      <div className="todo-text">
        <p>{todo.title}</p>
      </div>

      <div className="bottom-tools">
        <span>
          <img src={ICON_EDIT} alt="" />
          수정
        </span>
        <span>
          <div className="line" />
        </span>
        <span>
          <img src={ICON_DELETE} alt="" />
          삭제
        </span>
      </div>
    </TodoBox>
  );
};

export default TodoItems;
