import React from "react";
import Icon from "@material-ui/core/Icon";
import Home from "./Home";
import Maintainer from "./Maintainer";
import About from "./About";

const Routes = [
  {
    path: "/",
    key: "home",
    icon: <Icon>folder</Icon>,
    sidebarName: "Home",
    component: Home,
  },
  {
    path: "/maintainer",
    key: "maintainer",
    icon: <Icon>people</Icon>,
    sidebarName: "Maintainer",
    component: Maintainer,
  },
  {
    path: "/about",
    key: "about",
    icon: <Icon>help</Icon>,
    sidebarName: "About Us",
    component: About,
  },
];

export default Routes;
