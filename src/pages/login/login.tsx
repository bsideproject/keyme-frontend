import React from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

import IMG_ICON_KAKAO_IMG from "~assets/icons/ico_kakao.svg";
import IMG_ICON_KEY from "~assets/icons/ico_key.svg";
import IMG_BG_LOGIN from "~assets/images/img_bg.png";
import { useUser } from "~hooks/queries/user";
import useRedirectUrl from "~hooks/useRedirectUrl";
import { isProduction, serverEndPoint } from "~utils/axios";

const kakaoUrlPath = isProduction ? "kakao" : "kakao-by-local-dev";

export const KAKAO_AUTH_URL = `${serverEndPoint}/oauth2/authorization/${kakaoUrlPath}`;

const LoginContainer = styled.div`
  font-family: "Pretendard";
  max-width: 393px;
  height: 100%;
  background: url("${IMG_BG_LOGIN}") no-repeat;
  background-size: 100% 100%;
  color: #fff;
  position: relative;

  .icon-area {
    display: flex;
    justify-content: center;
    padding-top: 200px;
  }

  .kakao-login-btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%);
    width: 353px;
    height: 56px;
    background: #fae44d;
    border-radius: 10px;
    font-weight: 500;
    font-size: 17px;
    line-height: 22px;
    color: #222;
    img {
      margin-right: 8px;
    }
    span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
    //img {
    //  height: 56px;
    //}
  }

  .title {
    margin-top: 20px;
    text-align: center;
    font-weight: 800;
    font-size: 32px;
  }

  .desc {
    margin-top: 60px;
    margin-bottom: 200px;
    text-align: center;
    line-height: 32px;

    strong {
      font-weight: 900;
    }
    font-size: 24px;
  }
`;

function Login() {
  const { user } = useUser();
  const { redirectUrl } = useRedirectUrl();
  if (user) return <Navigate to={redirectUrl} />;

  return (
    <LoginContainer>
      <div className="icon-area">
        <img src={IMG_ICON_KEY} alt="" />
      </div>
      <div className="title">KEYME</div>
      <div className="desc">
        <strong>나만의 OKR</strong>을 <br />
        쉽고 간편하게 만들어보세요.
      </div>
      <a className="kakao-login-btn" href={KAKAO_AUTH_URL}>
        <div>
          <span>
            <img src={IMG_ICON_KAKAO_IMG} />
            카카오로 로그인
          </span>
        </div>

        {/*<img src={IMG_KAKAO_LOGIN_BTN} alt="카카오 로그인 버튼" />*/}
      </a>
    </LoginContainer>
  );
}

export default Login;
