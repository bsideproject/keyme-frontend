import React from "react";
import Toggle from "react-toggle";

import KAKAO_LOGO from "~assets/icons/icon_kakao_logo_sm.svg";
import WithdrawalModal from "~components/Modal/MyInfo/Withdrawal";
import { useUser } from "~hooks/queries/user";
import useModal from "~hooks/useModal";
import { Container } from "~pages/mypage/mypage.styles";
function MyPage() {
  const { user } = useUser();

  const { ModalPortal, openModal, closeModal } = useModal();

  return (
    <Container>
      <div className="profile-area">
        {user?.name}님 <br />
        안녕하세요!
      </div>

      <div className="line" />

      <div className="login-area">
        <div className="sm-text">로그인 정보</div>
        <div className="thin-line" />

        <div className="social">
          <div>소셜 로그인 연동</div>
          <button className="logout-btn">로그아웃</button>
        </div>
      </div>
      <div className="email-area">
        <img src={KAKAO_LOGO} alt="" />
        <span>{user?.email}</span>
      </div>

      <div className="line" />

      <div className="setting-area">
        <div className="sm-text">환경설정</div>
        <div className="thin-line" />
        <div className="dark-mode-wrap">
          <span>다크모드</span>
          <label>
            <Toggle
              defaultChecked={false}
              icons={false}
              onChange={(e) => {
                console.log(e);
              }}
            />
          </label>
        </div>

        <div className="underline-text" onClick={openModal}>
          회원탈퇴
        </div>
      </div>

      <ModalPortal>
        <WithdrawalModal closeModal={closeModal} />
      </ModalPortal>
    </Container>
  );
}

export default MyPage;
