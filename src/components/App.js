import React from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "light",
          primary: {
            main: "#9778ce",
          },
          secondary: {
            main: "#637bfe",
          },
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div theme={theme}>
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

const appDiv = document.getElementById("app");

render(<App />, appDiv);
