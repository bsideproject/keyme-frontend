import React from "react";
import { Navigate } from "react-router-dom";

import useRedirectUrl from "@hooks/useRedirectUrl";
import { useUser } from "@hooks/useUser";
import { isProduction, serverEndPoint } from "@utils/axios";

const kakaoUrlPath = isProduction ? "kakao" : "kakao-by-local-dev";

export const KAKAO_AUTH_URL = `${serverEndPoint}/oauth2/authorization/${kakaoUrlPath}`;

function Login() {
  const { user } = useUser();
  const { redirectUrl } = useRedirectUrl();
  if (user) return <Navigate to={redirectUrl} />;

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
