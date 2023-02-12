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
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .flex-justify-center {
    display: flex;
    justify-content: center;
  }
  .flex-alignItems-center {
    display: flex;
    align-items: center;
  }
  body {
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.bgColor};
  }
`;

export default GlobalStyle;
