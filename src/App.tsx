import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import Header from "./components/Header";
import Navigation from "./Navigation";
import Routes from "./Routes";
import { ColorModeContext } from "./color-mode-context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
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
          <Switch>
            {Routes.map((route: any) => (
              <Route exact path={route.path} key={route.path}>
                <route.component />
              </Route>
            ))}
            <Redirect from="*" to="/" />
          </Switch>
          <Navigation></Navigation>
        </div>
      </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>
  );
};

export default App;
