// IMPORT

// Next
import { useRouter } from "next/router";

// React
import { useState, useEffect } from "react";

// Material UI

// Components

// Utils
import { updateProfile } from "../../utils/Utils";
// Data

// Other
import axios from "axios";

// TYPE/INTERFACE
import { Ad, CurrentAd, Profile } from "../../types/Types";
type Props = {
  //   adId: string;
  //   profile: any;
  jwt: string;
  setProfile: (value: Profile) => void;
};
// Functional component
export const useRemoveAd = ({ jwt, setProfile }: Props) => {
  // State
  const removeAd = (adId: string, profile: any) => {
    const updatedAds = profile.ad.filter((ad: any) => {
      return ad.id != adId;
    });
    console.log(updatedAds);
    updateProfile(jwt, profile.id, { ad: updatedAds }, setProfile);
  };

  // Functions
  // Return
  return removeAd;
};
