import { BrowserRouter } from "react-router-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import BottomNav from "./bottomNav";

describe("바텀 네비게이션 테스트", () => {
  it("바텀 네비게이션 렌더링 테스트", () => {
    render(
      <BrowserRouter>
        <BottomNav />
      </BrowserRouter>
    );

    // 기본 텍스트 체크
    screen.getByText("Home");
    screen.getByText("OKR");
    screen.getByText("ToDo");
    screen.getByText("Report");
  });
});
