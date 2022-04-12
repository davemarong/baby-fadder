import "../styles/globals.css";
// Next
import type { AppProps } from "next/app";

// React
import { useState } from "react";

// Default Value
import {
  defaultValue_CurrentAd,
  defaultValue_Profile,
} from "../src/types/DefaultValues";

// Custom Hook
import { useLogUserIn } from "../src/components/CustomHook/useLogUserIn";

// Snackbar
import { SnackbarProvider } from "notistack";
import { updateProfile } from "../src/utils/Utils";
// import {updateProfile} from
function MyApp({ Component, pageProps }: AppProps) {
  // State
  // The current selected ad when the user navigates to a page to showcase a single ad (www.babyfadder.no/finn/[id])
  const [currentAd, setCurrentAd] = useState(defaultValue_CurrentAd);

  // The jwt token
  const [jwt, setJwt] = useState("");

  // The current users profile information. Updated on login and PUT-requests
  const [profile, setProfile] = useState(defaultValue_Profile);

  // If user is logged in or not
  const [isLogged, setIsLogged] = useState(false);

  // Props object
  const PagePropsObject = {
    currentAd: currentAd,
    setCurrentAd: setCurrentAd,
    jwt: jwt,
    setJwt: setJwt,
    profile: profile,
    setProfile: setProfile,
    isLogged: isLogged,
    setIsLogged: setIsLogged,
  };
  // Custom hook
  // console.log(setProfile);
  useLogUserIn({
    setProfile: setProfile,
    setJwt: setJwt,
    setIsLogged: setIsLogged,
  });
  return (
    <SnackbarProvider maxSnack={3}>
      <Component {...pageProps} {...PagePropsObject} />
    </SnackbarProvider>
  );
}

export default MyApp;
