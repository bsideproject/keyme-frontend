import { fireEvent, render, screen } from "@testing-library/react";

import Todo from "./todo";

describe("Todo 화면 테스트", () => {
  it("Todo 화면 렌더링 체크", () => {
    render(<Todo />);
  });
});
