import React from "react";
const REST_API_KEY = "e343ec0ab898e9e061e401e7c145bbd4";
const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";
const SERVICE_URL = 'https://keyme.kr'

export const KAKAO_AUTH_URL = `${SERVICE_URL}/api/v1/oauth2/authorization/kakao`;
// 로컬 개발용
// export const KAKAO_AUTH_URL = `${SERVICE_URL}/api/v1/oauth2/authorization/kakao-by-local-dev`;

function Login() {
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
