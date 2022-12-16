import { FallbackProps } from "react-error-boundary";

import * as Sentry from "@sentry/react";

const BaseFallbackUI = ({ resetErrorBoundary, error }: FallbackProps) => {
  if (error) {
    Sentry.captureException(error);
  }

  return (
    <div>
      There was an error!
      <button onClick={() => resetErrorBoundary()}>Try again</button>
    </div>
  );
};

export default BaseFallbackUI;
