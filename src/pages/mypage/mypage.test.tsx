import { render, fireEvent, screen } from "@testing-library/react";

import MyPage from "./mypage";

describe("마이페이지 화면 테스트", () => {
  it("마이페이지 렌더링 테스트", () => {
    render(<MyPage />);

    // 내 정보 수정 체크

    // 알림 설정 체크

    // 라이트모드, 다크모드 체크 (홈화면 상단바에 넣어도 될 듯?)

    // 회원 탈퇴 -> 내 정보 수정에 하단에 넣는게 좋을듯
  });
});
