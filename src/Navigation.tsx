import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Link, withRouter } from "react-router-dom";
import Routes from "./Routes";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const Navigation: React.FC = (props: any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("home");

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  const activeRoute = (defaultValue: string) => {
    let result = Routes.filter(
      (route) => route.path === props.location.pathname
    ).map((route) => route.key)[0];
    result = result || defaultValue;
    return result;
  };

  return (
    <BottomNavigation
      value={activeRoute(value)}
      onChange={handleChange}
      className={classes.root}
    >
      {Routes.map((prop, key) => {
        return (
          <BottomNavigationAction
            label={prop.sidebarName}
            key={key}
            component={Link}
            to={prop.path}
            value={prop.key}
            icon={prop.icon}
          />
        );
      })}
    </BottomNavigation>
  );
};

export default withRouter(Navigation);
