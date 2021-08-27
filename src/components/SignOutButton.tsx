import React from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from "@material-ui/core";
import { IPublicClientApplication } from "@azure/msal-browser";

function handleLogout(instance: IPublicClientApplication) {
  instance.logoutRedirect().catch(e => {
    console.error(e);
  });
}

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const SignOutButton = () => {
  const { instance } = useMsal();

  return (
    <Button variant="contained" color="secondary" onClick={() => handleLogout(instance)}>Sign out</Button>
  );
}