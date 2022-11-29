import { render, fireEvent, screen } from "@testing-library/react";

import Report from "./report";

describe("리포트 화면 테스트", () => {
  it("리포트 렌더링 테스트", () => {
    render(<Report />);

    // 하루, 주간, 월간 리포트 체크
  });
});
