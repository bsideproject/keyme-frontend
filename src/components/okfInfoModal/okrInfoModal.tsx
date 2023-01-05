import React from "react";

import { ReactComponent as IconClose } from "@assets/icons/ico_close.svg";
import {
  InfoBadge,
  InfoBox,
  InfoBoxBody,
  InfoBoxHeader,
  InfoContainer,
  InfoHeader,
  InfoHeaderTitle,
  InfoItem,
  InfoModal,
  InfoText,
} from "@styles/modal";

interface cProps {
  showModal: boolean;
  setShowModal: (param: boolean) => void;
}

function OkrInfoModal({ showModal, setShowModal }: cProps) {
  const okrExmaple = {
    objective: "안전한 테스트 익히기",
    keyResults: [
      {
        title: "테스트 커버리지 90% 달성",
      },
      {
        title: "Spring boot 통합 테스트 병렬실행",
      },
    ],
  };
  return (
    <InfoModal showModal={showModal}>
      <InfoContainer>
        <InfoHeader>
          <div style={{ width: "30px" }}></div>
          <InfoHeaderTitle>OKR 만들기 예시</InfoHeaderTitle>
          <IconClose onClick={() => setShowModal(false)} />
        </InfoHeader>
        <InfoBox>
          <InfoBoxHeader>Objective</InfoBoxHeader>
          <InfoBoxBody>
            <InfoItem>
              <InfoBadge className="text">배움</InfoBadge>
              <InfoText>안전한 테스트 익히기</InfoText>
            </InfoItem>
          </InfoBoxBody>
        </InfoBox>
        <InfoBox>
          <InfoBoxHeader>Key result</InfoBoxHeader>
          <InfoBoxBody>
            {okrExmaple.keyResults.map(({ title }, idx) => {
              return (
                <InfoItem key={idx}>
                  <InfoBadge className="circle">{idx}</InfoBadge>
                  <InfoText>{title}</InfoText>
                </InfoItem>
              );
            })}
          </InfoBoxBody>
        </InfoBox>
      </InfoContainer>
    </InfoModal>
  );
}

export default OkrInfoModal;
