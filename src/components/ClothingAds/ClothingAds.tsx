// IMPORT

// Next
import Image from "next/image";

// React

// Material UI
import Grid from "@mui/material/Grid";

// Components

// Utils

// Data
import { profiles } from "../../dummyData/Profiles";

// Images
import babyclothes from "../../dummyData/images/babyclothes.jpg";

// TYPE/INTERFACE

// Functional component
export const ClothingAds = () => {
  // State

  // Functions

  // Return
  return (
    <Grid container spacing={4}>
      {profiles.map((profile: any) => {
        return profile.ad.map((ad: any) => {
          return (
            <Grid key={ad.title} item md={4} sm={6}>
              <Image src={babyclothes} height={200} width={150} alt="" />
              <p>
                <b>{ad.title}</b>
              </p>
              <p>
                {ad.brand} - {ad.size} - {ad.price}kr{" "}
              </p>
            </Grid>
          );
        });
      })}
    </Grid>
  );
};
