import React from "react";
import Header from "./components/Header";
import Navigation from "./Navigation";
import Routes from "./Routes";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      margin: theme.spacing(0),
    },
    root: {
      padding: theme.spacing(3, 2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.app}>
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
    </Router>
  );
};

export default App;
