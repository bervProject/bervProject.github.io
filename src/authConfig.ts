import { Configuration } from "@azure/msal-browser";

export const msalConfig : Configuration = {
  auth: {
    clientId: "a1b99b18-caf6-4e5d-ab28-4456f87a9ffc",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: process.env.PUBLIC_URL || "http://localhost:3000",
  },
  cache: {
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};