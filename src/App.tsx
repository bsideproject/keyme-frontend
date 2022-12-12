import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { ThemeProvider } from "styled-components";

import useThemes from "@hooks/useTheme";
import AllRoutes from "@routes/index";
import GlobalStyle from "@styles/globalStyle";
import THEME from "@styles/theme";

import "./App.css";

function App() {
  const [theme, onToggleTheme] = useThemes();

  return (
    <>
      <ThemeProvider theme={THEME[theme]}>
        <GlobalStyle />
        <DarkModeSwitch
          style={{ marginBottom: "2rem" }}
          checked={theme === "dark"}
          onChange={onToggleTheme}
          size={30}
        />
        <AllRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
