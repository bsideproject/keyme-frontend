import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  a {
    cursor: pointer;
    color: #fff; text-decoration: none; outline: none;
  }
  html, body {
    height: 100%;
  }
  #root {
    height: 100%;
  }
  #App {
    height: 100%;
  }
  body {
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.bgColor};
  }
`;

export default GlobalStyle;
