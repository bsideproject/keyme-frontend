import { atom } from "recoil";

import { Todo } from "~types/todo";

export const todoModalAtom = atom({
  key: "todoModalAtom",
  default: false,
});

export const editModeAtom = atom({
  key: "editMode",
  default: false,
});

export const selectTodoAtom = atom<Todo | null>({
  key: "selectTodoAtom",
  default: null,
});
