// IMPORT

// Next

// React
import { useState, useEffect } from "react";

// Material UI

// Components

// Utils

// Data

// Other
import axios from "axios";

// TYPE/INTERFACE
import { Ad, CurrentAd, Profile } from "../../types/Types";
type Props = {
  profileId: number;
  setCurrentAd: (value: CurrentAd) => void;
  adId: string;
};
// Functional component
export const useRedirectToAdPageByProfileId = ({
  profileId,
  setCurrentAd,
  adId,
}: Props) => {
  // State

  const findAdById = (adId: string, profile: Profile) => {
    const currentAd = profile.ad.filter((ad: any) => ad.id === adId);
    console.log(currentAd);
  };

  // Functions
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `http://localhost:1337/api/users/${profileId}`
      );
      console.log(response.data);
      //   findAdById(adId, response.data);
    })();
  }, []);

  // Return
  return <></>;
};
