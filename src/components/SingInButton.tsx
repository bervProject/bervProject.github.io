import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { Button } from "@mui/material";
import { IPublicClientApplication } from "@azure/msal-browser";

function handleLogin(instance: IPublicClientApplication) {
  instance.loginRedirect(loginRequest).catch(e => {
    console.error(e);
  });
}

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
  const { instance } = useMsal();

  return (
    <Button variant="contained" color="secondary" onClick={() => handleLogin(instance)}>Sign In</Button>
  );
}