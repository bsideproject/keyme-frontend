import React from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "@hooks/useUser";
import { serverEndPoint } from "@utils/axios";

export const KAKAO_AUTH_URL = `${serverEndPoint}/oauth2/authorization/kakao`;

function Login() {
  const navigate = useNavigate();
  const { user, isLoading } = useUser();

  if (!isLoading && user) {
    navigate("/");
  }

  return (
    <div>
      <a id="kakao-login-btn" href={KAKAO_AUTH_URL}>
        <img
          src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
          width="222"
          alt="카카오 로그인 버튼"
        />
      </a>
    </div>
  );
}

export default Login;
