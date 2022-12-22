import { fireEvent, render, screen } from "@testing-library/react";

import OKR from "./okr";

describe("OKR 화면 테스트", () => {
  it("OKR 화면 기본 렌더링 체크", () => {
    render(<OKR />);

    // 로고 체크
    screen.getByRole("logo");

    // 누구누구의 OKR
    screen.getByText(/[a-zA-Z가-힣]+님의 OKR/i);
  }),
    it("홈 화면 OKR 데이터 통신 체크", () => {
      render(<OKR />);

      // Objective 체크 (async, await)
      screen.findByText("목표");

      // Key Result 체크
      screen.findByText("Key Result");
    }),
    it("홈 화면 OKR 상세 페이지 체크", () => {
      render(<OKR />);

      // 더보기 버튼 클릭
    });
  it("홈 화면 OKR 등록 모달 체크", () => {
    render(<OKR />);

    // OKR 추가 버튼 클릭
    const btn = screen.getByText("+ OKR 만들기");
    fireEvent.click(btn);

    // // OKR 등록 모달 오픈 체크 (제목)
    // screen.getByText("OKR 만들기");
    // // 설명
    // screen.getByText("어떤 목표를 가지고 계신가요?");

    // // OKR 카테고리
    // screen.queryAllByRole("category");

    // // OKR 등록 form 체크
    // screen.getByRole("form");

    // // OKR 등록 버튼 클릭
    // const submitBtn = screen.getByAltText("submitokr");
    // fireEvent.click(submitBtn);

    // // OKR 등록 form 양식 체크

    // // 등록 후 모달 close 체크
    // expect(screen.queryByText("OKR 추가")).toHaveLength(0);

    // // 데이터 등록 후 홈 화면 OKR 데이터 체크
  });
});
