import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Home from './Home';
import Maintainer from './Maintainer';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      margin: theme.spacing(0)
    },
    root: {
      padding: theme.spacing(3, 2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.app}>
        <Header></Header>
        <Switch>
          <Route path="/maintainer">
            <Maintainer />
          </Route>
          <Route path="/about">

          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Navigation></Navigation>
      </div>

    </Router>
  );
}

export default App;
