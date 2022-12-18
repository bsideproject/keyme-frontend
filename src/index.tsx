import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { queryClient } from "@utils/react-query/queryClient";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

Sentry.init({
  dsn: "https://d6ce4371f66b41caafe857cd57f6d4fd@o4504334336458752.ingest.sentry.io/4504334337835008",
  release: "0.1.0",
  environment: process.env.NODE_ENV,
  normalizeDepth: 6,
  integrations: [new Sentry.Integrations.Breadcrumbs({ console: true }), new BrowserTracing()],
  enabled: process.env.NODE_ENV === "production",
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
