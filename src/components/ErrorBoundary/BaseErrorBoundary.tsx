import * as React from "react";
import { FC } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

interface Props {
  fallbackRender: (
    props: FallbackProps
  ) => React.ReactElement<
    unknown,
    string | React.FunctionComponent | typeof React.Component
  > | null;
  onReset: (...args: Array<unknown>) => void;
  children: React.ReactElement;
}

const BaseErrorBoundary: FC<Props> = ({ fallbackRender, onReset, children }) => {
  return (
    <ErrorBoundary onReset={onReset} fallbackRender={fallbackRender}>
      {children}
    </ErrorBoundary>
  );
};

export default BaseErrorBoundary;
