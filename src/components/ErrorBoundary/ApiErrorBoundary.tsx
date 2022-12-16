import React, { FC, useState } from "react";
import axios from "axios";
import { FallbackProps } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";

import BaseErrorBoundary from "@components/ErrorBoundary/BaseErrorBoundary";
import * as Sentry from "@sentry/react";

interface Props {
  children: React.ReactElement;
}

const ApiErrorBoundary: FC<Props> = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState("에러가 발생했습니다.");

  const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
    if (!axios.isAxiosError(error)) {
      throw error;
    }
    // 500 ~ server error
    if (
      axios.isAxiosError(error) &&
      error.config &&
      error.response &&
      error.response.status >= 500
    ) {
      const { method, url } = error.config;
      const { status } = error.response;
      Sentry.withScope((scope) => {
        scope.setTag("type", "api");
        scope.setTag("api", "general");
        scope.setLevel("error");
        scope.setFingerprint([method!, String(status)!, url!]);
      });
      Sentry.captureException(error);
      setErrorMessage("잠시만 기다려주세요. server error");
    }

    return (
      <div>
        {errorMessage}
        <div>
          <button onClick={resetErrorBoundary}>다시 시도</button>
        </div>
      </div>
    );
  };

  const { reset } = useQueryErrorResetBoundary();
  return (
    <BaseErrorBoundary fallbackRender={FallbackComponent} onReset={reset}>
      {children}
    </BaseErrorBoundary>
  );
};

export default ApiErrorBoundary;
