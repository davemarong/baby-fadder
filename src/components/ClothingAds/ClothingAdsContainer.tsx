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
import { AllProfiles } from "../../types/Types";
import { Ad } from "../../types/Types";

type ProfileMapped = {
  name: string;
  id: number;
  ad: Ad[];
  location: string;
};

type Props = {
  profileData: AllProfiles;
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
              {React.cloneElement(children, {
                ad: ad,
                name: profile.name,
                location: profile.location,
                profileId: profile.id,
              })}
            </React.Fragment>
          );
        });
      })}
    </Grid>
  );
};
