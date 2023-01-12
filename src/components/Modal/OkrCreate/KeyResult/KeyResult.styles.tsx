import styled from "styled-components";

import { ObjectiveHeader } from "../Objective/Objective.styles";

export const KeyResultHeader = styled(ObjectiveHeader)`
  align-items: flex-end;
`;

export const KeyResultBody = styled.div<{ isKeyResult: boolean }>`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 1rem;
  padding-bottom: 200px;
  display: ${({ isKeyResult }) => (isKeyResult ? "flex" : "none")};
`;
