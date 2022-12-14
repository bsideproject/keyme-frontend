import { fireEvent, render, screen } from "@testing-library/react";

import Report from "./report";

describe("리포트 화면 테스트", () => {
  it("리포트 렌더링 테스트", () => {
    render(<Report />);

    // 기본 텍스트 체크
    screen.getByText(/[가-힣a-zA-Z]+의 대시보드/i);
    screen.getByText(/나의 관심사는 [가-힣a-zA-Z]+이에요 !/i);

    // 캘린더 컴포넌트
    screen.getByRole("calendar");
  });
});
