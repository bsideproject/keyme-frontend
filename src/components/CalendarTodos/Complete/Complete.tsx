import React from "react";

import {
  CompleteBody,
  CompleteBox,
  CompleteHeader,
  CompleteList,
  TodoSymbol,
  TodoText,
} from "./Complete.styles";

interface cProps {
  category: {
    id: number;
    colorIdx: number;
    title: string;
  };
  todos: {
    id: number;
    title: string;
  }[];
}

function Complete({ category, todos }: cProps) {
  return (
    <CompleteBox>
      <CompleteHeader colorIdx={category.colorIdx}>{category.title}</CompleteHeader>
      <CompleteBody>
        {todos.map(({ id, title }) => {
          return (
            <CompleteList key={id}>
              <TodoSymbol colorIdx={category.colorIdx} />
              <TodoText>{title}</TodoText>
            </CompleteList>
          );
        })}
      </CompleteBody>
    </CompleteBox>
  );
}

export default Complete;
