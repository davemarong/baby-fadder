// IMPORT

// Next
import Image from "next/image";

// React

// Material UI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// Components

// Styled Components
import { AdText } from "../ReUsable/StyledComp/AdText";

// Utils

// Images
import clothesImage from "../../assets/images/pexels-polina-tankilevitch-3875080.jpg";

// Styles
import styles from "../../styles/Style.module.css";

// Other
import { v4 as uuidv4 } from "uuid";

// TYPE/INTERFACE
import { Profile, Ad } from "../../types/Types";
type Props = {
  profile: Profile;
};
// Functional component
export const MineAnnonser = ({ profile }: Props) => {
  // State

  // Functions

  // Return
  return (
    <Grid container justifyContent="center">
      {profile.ad.map((ad: Ad) => {
        return (
          <Grid
            container
            item
            sm={5}
            key={uuidv4()}
            flexWrap="nowrap"
            style={{ margin: "40px 0" }}
          >
            <Grid container item justifyContent="flex-end" xs={6}>
              <Image
                className={styles.ad_image}
                src={clothesImage}
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </Grid>
            <Grid xs={6} item container alignItems="center">
              <AdText
                fontWeightBig="normal"
                fontWeightSmall="lighter"
                margin="10px"
                textAlign="left"
                fontSize={0}
                bigText={ad.title}
              >
                {ad.brand} - {ad.size} - {ad.price}kr
              </AdText>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
