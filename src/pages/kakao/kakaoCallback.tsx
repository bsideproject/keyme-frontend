import { useSearchParams } from "react-router-dom";

const KakaoCallbackPage = () => {
  const [params] = useSearchParams();
  const query = params.get("code"); // test

  return <div>잠시만 기다려주세요.</div>;
};

export default KakaoCallbackPage;
