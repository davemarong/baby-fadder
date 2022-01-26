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
type Ad = {
  title: string;
  description: string;
  brand: string;
  price: number;
  sex: string;
  size: string;
  color: string;
  clothingType: string;
  img: string;
};
type Profile = {
  name: string;
  id: number;
  ad: Ad[];
};
// Functional component
export const ClothingAds = () => {
  // State

  // Functions

  // Return
  return (
    <Grid container spacing={4}>
      {profiles.map((profile: Profile) => {
        return profile.ad.map((ad: Ad) => {
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
