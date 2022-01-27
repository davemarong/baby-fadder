// IMPORT

// Next

// React
import React, { ReactNode } from "react";

// Material UI
import Grid from "@mui/material/Grid";

// Components

// Utils

// Data

// TYPE/INTERFACE
import { Profile } from "../../types/Types";
import { Ad } from "../../types/Types";
import { ClothingAds } from "./ClothingAds";

type ProfileMapped = {
  name: string;
  profileId: number;
  ad: Ad[];
};

type Props = {
  profileData: Profile;
  children: any;
};
// Functional component
export const ClothingAdsContainer = ({ profileData, children }: Props) => {
  // State

  // Functions

  // Return
  return (
    <Grid container>
      {profileData.map((profile: ProfileMapped) => {
        return profile.ad.map((ad: Ad) => {
          return (
            <React.Fragment key={ad.id}>
              {React.cloneElement(children, { ad: ad })}
            </React.Fragment>
          );
        });
      })}
    </Grid>
  );
};
