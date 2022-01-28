// IMPORT

// Next
import Image from "next/image";

// React

// Material UI
import Grid from "@mui/material/Grid";

// Components

// Styled component
import { AdText } from "./StyledComp/AdText";

// CSS
import styles from "./Style.module.css";

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
    <Grid container>
      {profileData.map((profile: ProfileMapped) => {
        return profile.ad.map((ad: Ad) => {
          return (
            <Grid
              style={{ marginTop: 50 }}
              key={ad.title}
              container
              direction="column"
              alignItems="center"
              item
              md={3}
              sm={4}
              xs={6}
            >
              <Image
                className={styles.ad_image}
                src={babyclothes}
                height={200}
                width={150}
                alt=""
              />
              <AdText bigText={ad.title}>
                {ad.brand} - {ad.size} - {ad.price}kr
              </AdText>
            </Grid>
          );
        });
      })}
    </Grid>
  );
};
