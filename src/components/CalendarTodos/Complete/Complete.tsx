import React from "react";

import { Category } from "~types/category";

import {
  CompleteBody,
  CompleteBox,
  CompleteHeader,
  CompleteList,
  TodoSymbol,
  TodoText,
} from "./Complete.styles";

interface cProps {
  category: Category;
  todos: {
    id: number;
    title: string;
  }[];
}

function Complete({ category, todos }: cProps) {
  return (
    <CompleteBox>
      <CompleteHeader colorIdx={category.colorIndex}>{category.title}</CompleteHeader>
      <CompleteBody>
        {todos.map(({ id, title }) => {
          return (
            <CompleteList key={id}>
              <TodoSymbol colorIdx={category.colorIndex} />
              <TodoText>{title}</TodoText>
            </CompleteList>
          );
        })}
      </CompleteBody>
    </CompleteBox>
  );
}

export default Complete;
