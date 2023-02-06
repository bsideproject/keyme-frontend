import styled from "styled-components";

import { palette } from "~styles/palette";

export const Container = styled.div`
  width: 317px;
  height: 260px;
  background: #fff;
  border-radius: 30px;
  z-index: 10000;

  .logo-wrap {
    display: flex;
    justify-content: center;
    margin-top: 46px;
  }

  .desc {
    margin-top: 5px;
    display: flex;
    justify-content: center;
    text-align: center;
    color: #222;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;

    > p {
      width: 273px;
    }
  }

  .footer {
    display: flex;
    gap: 20px;
    margin-top: 56px;
    padding: 0 35px;
    font-size: 15px;
    font-weight: 500;
    .border {
      color: #909090;
      font-size: 7px;
      position: relative;
      top: 3px;
    }
    .gray {
      color: #909090;
      cursor: pointer;
    }
    .primary {
      color: ${palette.primary};
      font-weight: 700;
      cursor: pointer;
    }
  }
`;
