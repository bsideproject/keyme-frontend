import React, { useState } from "react";

import { ReactComponent as IconClose } from "@assets/icons/ico_close.svg";
import BaseBox from "@components/Box/BaseBox";

import { InfoContainer, InfoHeader, InfoHeaderTitle, InfoModal } from "./OkrInfo.styles";

interface cProps {
  title: string;
  Content: React.ElementType;
  info: {
    category: string;
    objective: string;
    keyResults: { title: string }[];
  };
  showModal: boolean;
  setShowModal: (param: boolean) => void;
}

function OkrInfoModal({ title, Content, info, showModal, setShowModal }: cProps) {
  const [modalAnim, setModalAnim] = useState<boolean>(true);

  // bgColor 추가
  return (
    <InfoModal anim={modalAnim} showModal={showModal}>
      <InfoContainer>
        <InfoHeader>
          <div style={{ width: "30px" }}></div>
          <InfoHeaderTitle>{title}</InfoHeaderTitle>
          <IconClose onClick={() => setShowModal(false)} />
        </InfoHeader>
        <Content />
        {info.category === "" && info.objective === "" ? (
          ""
        ) : (
          <BaseBox
            colorIdx={1}
            info={[
              {
                badgeType: "text",
                badgeText: info.category,
                title: info.objective,
              },
            ]}
            title={"Objective"}
          />
        )}

        <BaseBox
          colorIdx={1}
          info={info.keyResults.map(({ title }, idx) => {
            return {
              badgeType: "circle",
              badgeText: idx.toString(),
              title,
            };
          })}
          title={"Key result"}
        />
      </InfoContainer>
    </InfoModal>
  );
}

export default OkrInfoModal;
