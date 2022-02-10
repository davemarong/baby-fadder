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

function MyApp({ Component, pageProps }: AppProps) {
  // State
  const [currentAd, setCurrentAd] = useState(defaultValue_CurrentAd);
  const [jwt, setJwt] = useState("");
  const [profile, setProfile] = useState(defaultValue_Profile);
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
  return <Component {...pageProps} {...PagePropsObject} />;
}

export default MyApp;
