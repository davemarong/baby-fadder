// IMPORT

// Next
import Image from "next/image";

// React

// Material UI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

// Icon
import { DeleteIcon } from "../../assets/icons/MuiIcons";

// Components
import { MainButton } from "../Buttons/MainButton";

// Styled Components
import { AdText } from "../ReUsable/StyledComp/AdText";

// Custom hook
import { useRedirectToAdPage } from "../CustomHook/useRedirectToAdPage";
import { useRemoveAd } from "../CustomHook/useRemoveAd";

// Utils

// Images
import clothesImage from "../../assets/images/pexels-polina-tankilevitch-3875080.jpg";

// Styles
import styles from "../../styles/Style.module.css";

// Other
import { v4 as uuidv4 } from "uuid";

// TYPE/INTERFACE
import { Profile, Ad, CurrentAd } from "../../types/Types";
type Props = {
  profile: Profile;
  setCurrentAd: (value: CurrentAd) => void;
  jwt: string;
  setProfile: (value: Profile) => void;
};
// Functional component
export const MineAnnonser = ({
  profile,
  setCurrentAd,
  jwt,
  setProfile,
}: Props) => {
  // State

  // Custom hook
  const redirectToAdPage = useRedirectToAdPage({
    setCurrentAd: setCurrentAd,
    name: profile.name,
    location: profile.location,
  });

  const removeAd = useRemoveAd({ jwt: jwt, setProfile: setProfile });

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
            <MainButton
              func={() => {
                redirectToAdPage(ad);
              }}
            >
              Se mer
            </MainButton>
            <IconButton
              onClick={() => {
                removeAd(ad.id, profile);
              }}
            >
              {DeleteIcon}
            </IconButton>
          </Grid>
        );
      })}
    </Grid>
  );
};
