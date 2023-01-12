import styled from "styled-components";

import { breakPoints } from "~styles/responsive";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${breakPoints.small};
  padding: 32px;

  .title {
    margin-top: 250px;
    font-size: 32px;
    text-align: center;
  }

  .login-btn-wrapper {
    display: flex;
    justify-content: center;
  }
`;
