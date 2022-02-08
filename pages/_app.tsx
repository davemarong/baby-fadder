import "../styles/globals.css";
// Next
import type { AppProps } from "next/app";

// React
import { useState } from "react";

// Default Value
import {
  defaultValue_Ad,
  defaultValue_Profile,
} from "../src/types/DefaultValues";

function MyApp({ Component, pageProps }: AppProps) {
  // State
  const [currentAd, setCurrentAd] = useState(defaultValue_Ad);
  const [jwt, setJwt] = useState("");
  const [profile, setProfile] = useState(defaultValue_Profile);

  // Props object
  const PagePropsObject = {
    currentAd: currentAd,
    setCurrentAd: setCurrentAd,
    jwt: jwt,
    setJwt: setJwt,
    profile: profile,
    setProfile: setProfile,
  };
  return <Component {...pageProps} {...PagePropsObject} />;
}

export default MyApp;
