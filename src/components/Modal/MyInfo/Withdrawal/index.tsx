import { FC } from "react";

import LOGO from "~assets/icons/ico_logo_type2.svg";
import { Container } from "~components/Modal/MyInfo/Withdrawal/index.styles";
import { VoidFn } from "~components/Modal/TodoModal";

interface Props {
  closeModal: VoidFn;
}

const WithdrawalModal: FC<Props> = ({ closeModal }) => {
  return (
    <Container>
      <div className="logo-wrap">
        <img src={LOGO} alt="" />
      </div>

      <div className="desc">
        <p>
          지금 탈퇴하시면 KEYME에 작성해주신 <br /> 모든 정보가 삭제되어요! 정말 탈퇴하시겠어요?
        </p>
      </div>

      <div className="footer">
        <span className="gray">네 탈퇴할래요</span>
        <span className="border">|</span>
        <span className="primary" onClick={closeModal}>
          키미와 함께할래요
        </span>
      </div>
    </Container>
  );
};

export default WithdrawalModal;
