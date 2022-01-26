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
import { Ad } from "../../types/Types";
import { Profile } from "../../types/Types";

type ProfileMapped = {
  name: string;
  id: number;
  ad: Ad[];
};
type Props = {
  profileData: Profile;
};
// Functional component
export const ClothingAds = ({ profileData }: Props) => {
  // State

  // Functions

  // Return
  return (
    <Grid container justifyContent="space-evenly" spacing={4}>
      {profileData.map((profile: ProfileMapped) => {
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
