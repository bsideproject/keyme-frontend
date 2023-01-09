import React, { useEffect } from "react";
import classNames from "classnames";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

import BaseHeader from "@components/baseHeader/baseHeader";
import AllTab from "@pages/todo/all";
import CompletedTab from "@pages/todo/complete";
import InProgressTab from "@pages/todo/inProgress";
import { routePath } from "@routes/index";
import { palette } from "@styles/palette";

const Container = styled.div`
  position: relative;
  padding: 10px;
  .tab {
    a {
      color: #707070;
    }
    .on {
      color: ${palette.primary} !important;
      font-weight: 700;
    }
    width: 100%;
    padding: 10px 0;
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #707070;
    letter-spacing: -0.005em;
    margin-bottom: 20px;
  }
`;
const { ALL_TAB, IN_PROGRESS_TAB, COMPLETE_TAB } = routePath;

const todoListsTab = [
  { value: "all", text: "전체", pathname: ALL_TAB },
  { value: "in-progress", text: "진행 중", pathname: IN_PROGRESS_TAB },
  { value: "complete", text: "완료", pathname: COMPLETE_TAB },
];

function TodoLists() {
  const [search] = useSearchParams();
  const queryTab = search.get("tab");
  const navigate = useNavigate();
  useEffect(() => {
    if (!queryTab) {
      navigate(ALL_TAB);
    }
  }, []);

  return (
    <Container>
      <BaseHeader text=" TO DO" />
      <ul className="tab">
        {todoListsTab.map((item, i) => (
          <li key={i}>
            <Link className={classNames({ on: queryTab === item.value })} to={item.pathname}>
              {item.text}{" "}
            </Link>
          </li>
        ))}
      </ul>

      {queryTab === "all" ? (
        <AllTab />
      ) : queryTab === "in-progress" ? (
        <InProgressTab />
      ) : (
        <CompletedTab />
      )}
    </Container>
  );
}

export default TodoLists;
