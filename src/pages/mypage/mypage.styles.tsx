import styled from "styled-components";

import { palette } from "~styles/palette";

export const Container = styled.div`
  width: 100%;
  position: relative;
  padding: 20px;
  overflow: hidden;

  .line {
    border-bottom: 2px solid black;
    width: calc(100% - 40px);
  }

  .thin-line {
    border-bottom: 1px solid #c2c2c2;
    width: 100%;
  }

  .profile-area {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: ${palette.font.black01};
    margin-bottom: 25px;
  }

  .login-area {
    width: calc(100% - 40px);

    .sm-text {
      margin-top: 15px;
      font-weight: 500;
      font-size: 18px;
      margin-bottom: 15px;
    }
    .social {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      font-weight: 400;
      font-size: 14px;
      .logout-btn {
        width: 70px;
        height: 24px;
        background: #f8f8f8;
        border-radius: 50px;
        color: #717171;
        border: none;
        font-size: 11px;
        line-height: 30px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .logout-btn:hover {
        opacity: 0.6;
      }
    }
  }
  .email-area {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #909090;
    font-size: 14px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 50px;
  }

  .setting-area {
    .sm-text {
      margin: 15px 0;
      font-weight: 500;
      font-size: 18px;
    }
    .thin-line {
      width: calc(100% - 40px) !important;
    }

    .dark-mode-wrap {
      margin-top: 16px;
      width: calc(100% - 40px);
      display: flex;
      justify-content: space-between;
      margin-bottom: 65px;
      .react-toggle-track {
        width: 43px !important;
        background-color: #d9d9d9 !important;
      }
    }
    .react-toggle--checked .react-toggle-thumb {
      left: 20px !important;
      // border-color: ${palette.primary} !important;
    }
    .react-toggle--checked .react-toggle-track {
      background-color: ${palette.primary} !important;
    }
    .react-toggle-thumb {
      border: none;
    }
    .underline-text {
      font-size: 14px;
      font-weight: 400;
      text-decoration-line: underline;
      color: #222222;
      cursor: pointer;
    }
  }
`;
