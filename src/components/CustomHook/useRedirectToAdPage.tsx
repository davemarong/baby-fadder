// IMPORT

// Next
import { useRouter } from "next/router";

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
  setCurrentAd: (value: CurrentAd) => void;
  // ad: Ad;
  name: string;
  location: string;
};
// Functional component
export const useRedirectToAdPage = ({
  // ad,
  setCurrentAd,
  name,
  location,
}: Props) => {
  // State

  // Router
  const router = useRouter();

  // Functions
  const redirectToAdPage = (ad: any) => {
    setCurrentAd({
      ...ad,
      name: name,
      location: location,
      profileId: ad.profileId,
    });
    const slug = ad.title.split(" ").join("_");
    router.push(`/finn/${slug}`);
  };
  // Return
  return redirectToAdPage;
};
