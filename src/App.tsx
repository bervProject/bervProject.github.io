import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import Header from "./components/Header";
import Navigation from "./Navigation";
import Routes from "./Routes";
import { ColorModeContext } from "./color-mode-context";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes as ReactRouters,
} from "react-router-dom";

const App: React.FC = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  return (
    <Router>
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Header></Header>
          <ReactRouters>
            {Routes.map((route) => (
              <Route path={route.path} key={route.path} element={React.createElement(route.component)} />
            ))}
            <Route path="*" element={React.createElement(() => <Navigate to="/" />)} />
          </ReactRouters>
          <Navigation></Navigation>
        </div>
      </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>
  );
};

export default App;
