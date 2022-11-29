import { render, fireEvent, screen } from "@testing-library/react";

import Login from "./login";

describe("로그인 화면 테스트", () => {
  it("로그인 화면 렌더링 테스트", () => {
    render(<Login />);

    // 로고 체크
    screen.getByAltText("logo");

    // 서비스 한줄 소개 체크
    screen.getByText("서비스 소개 한줄");

    // // 로그인 버튼 체크
    // const btn = screen.getByText("로그인");

    // 소셜 로그인 버튼 체크
    const btn = screen.getByText("login with KAKAO");
  });
});
