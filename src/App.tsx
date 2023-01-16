import React from "react";
import { useQueryErrorResetBoundary } from "react-query";
import { useLocation } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { ThemeProvider } from "styled-components";

import BottomNav from "~components/BottomNav/BottomNav";
import ApiErrorBoundary from "~components/ErrorBoundary/ApiErrorBoundary";
import BaseErrorBoundary from "~components/ErrorBoundary/BaseErrorBoundary";
import BaseFallback from "~components/ErrorBoundary/BaseFallback";
import AxiosInterceptor from "~hooks/axiosInterceptor";
import useThemes from "~hooks/useTheme";
import AllRoutes from "~routes/index";
import { AppContainer } from "~styles/app";
import GlobalStyle from "~styles/globalStyle";
import THEME from "~styles/theme";

function App() {
  const [theme, onToggleTheme] = useThemes();
  const { reset } = useQueryErrorResetBoundary();
  const location = useLocation();
  const excludesBottomNavRoutes = ["/login"];

  return (
    <>
      <BaseErrorBoundary fallbackRender={BaseFallback} onReset={reset}>
        <ApiErrorBoundary>
          <AxiosInterceptor>
            <ThemeProvider theme={THEME[theme]}>
              <GlobalStyle />
              <AppContainer id="App">
                {/*<DarkModeSwitch*/}
                {/*  style={{ marginBottom: "2rem" }}*/}
                {/*  checked={theme === "dark"}*/}
                {/*  onChange={onToggleTheme}*/}
                {/*  size={30}*/}
                {/*/>*/}
                <AllRoutes />
                <div id="modal" />

                {!excludesBottomNavRoutes.includes(location.pathname) ? <BottomNav /> : null}
              </AppContainer>
            </ThemeProvider>
          </AxiosInterceptor>
        </ApiErrorBoundary>
      </BaseErrorBoundary>
    </>
  );
}

export default App;
