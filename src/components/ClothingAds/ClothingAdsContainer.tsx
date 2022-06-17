// IMPORT

// Next

// React
import React, { useState, ReactNode } from "react";

// Material UI
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

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
  loading: boolean;
  children: any;
};
// Functional component
export const ClothingAdsContainer = ({
  profileData,
  loading,
  children,
}: Props) => {
  // State

  // Functions
  // Return
  if (loading) {
    return (
      <Grid container justifyContent="center" style={{ marginTop: 40 }}>
        <CircularProgress color="secondary" size={100} />
      </Grid>
    );
  } else {
    console.log(profileData);
    return (
      <Grid container>
        {profileData?.map((profile: ProfileMapped) => {
          return profile?.ad?.map((ad: Ad) => {
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
  }
};
