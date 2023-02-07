import styled from "styled-components";

import { BaseModal } from "../Modal.styles";

export const InfoModal = styled(BaseModal)<{ showModal: boolean }>`
  display: ${(props) => (props.showModal ? "flex" : "none")};
  align-items: center;
  z-index: 9999;
`;

export const InfoContainer = styled.div`
  margin: 0 1rem;
  flex: 1;
  background-color: white;
  border-radius: 20px;
  padding: 1rem;
`;

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

export const InfoHeaderTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;
