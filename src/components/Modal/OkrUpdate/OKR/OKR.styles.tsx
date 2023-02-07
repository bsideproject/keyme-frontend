import styled from "styled-components";

import { ObjectiveHeader } from "~components/Modal/OkrCreate/Objective/Objective.styles";

export const OKRHeader = styled(ObjectiveHeader)`
  align-items: flex-end;
`;

export const OKRBody = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 1rem;
  padding-bottom: 200px;
`;
