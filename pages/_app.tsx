import "../styles/globals.css";
// Next
import type { AppProps } from "next/app";

// React
import { useState } from "react";

// Default Value
import { defaultValue_Ad } from "../src/types/DefaultValues";

function MyApp({ Component, pageProps }: AppProps) {
  // State
  const [currentAd, setCurrentAd] = useState({
    name: "james",
    profileId: 0,
    id: 0,
    title: "Fin rød bukse",
    description:
      "Denne buksa vil vi ikke har mer fordi de ikke passer til vår lille Georg. Den er helt burkbar. Hvis vi kommer dit så for vi se da, min venn",
    brand: "H&M",
    price: 200,
    gender: "Gutt",
    size: "82-92",
    color: "Rød",
    clothingType: "bukse",
    img: "",
  });

  // Props object
  const PagePropsObject = {
    currentAd: currentAd,
    setCurrentAd: setCurrentAd,
  };

  return <Component {...pageProps} {...PagePropsObject} />;
}

export default MyApp;
