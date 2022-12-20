import { fireEvent, render, screen } from "@testing-library/react";

import OKR from "./okr";

describe("OKR 화면 테스트", () => {
  it("OKR 화면 기본 렌더링 체크", () => {
    render(<OKR />);

    // 로고 체크
    screen.getByRole("logo");

    // 환영문구 체크
    screen.getByText("반갑습니다. /[가-힣0-9a-zA-Z]{2:8}/님!");

    // 검색버튼 체크
    screen.getByAltText("search");

    // 알람버튼 체크
    screen.getByAltText("alarm");

    // 마이페이지 프로필 체크
    screen.getByAltText("profile");
  }),
    it("홈 화면 OKR 데이터 통신 체크", () => {
      render(<OKR />);

      // Objective 체크 (async, await)
      screen.findByText("목표");

      // Key Result 체크
      screen.findByText("Key Result");

      // Initialtive 체크
      screen.findByText("Initiative");
    }),
    it("홈 화면 OKR 등록 모달 체크", () => {
      render(<OKR />);

      // OKR 추가 버튼 클릭
      const btn = screen.getByAltText("addokr");
      fireEvent.click(btn);

      // OKR 등록 모달 오픈 체크 (제목)
      screen.getByText("OKR 추가");

      // OKR 카테고리 확인 (목표, KR, 투두)
      screen.getByText("목표");

      // OKR 등록 form 체크
      screen.getByRole("form");

      // OKR 등록 버튼 클릭
      const submitBtn = screen.getByAltText("submitokr");
      fireEvent.click(submitBtn);

      // OKR 등록 form 양식 체크

      // 등록 후 모달 close 체크
      expect(screen.queryByText("OKR 추가")).toHaveLength(0);

      // 데이터 등록 후 홈 화면 OKR 데이터 체크
    });
});
