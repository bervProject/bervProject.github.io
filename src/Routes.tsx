import React from "react";
import Icon from "@mui/material/Icon";
import Home from "./Home";
import Maintainer from "./Maintainer";
import About from "./About";
import Privacy from "./Privacy";

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
  {
    path: "/privacy",
    key: "privacy",
    icon: <Icon>help</Icon>,
    sidebarName: "Privacy Policy",
    component: Privacy,
  },
];

export default Routes;
