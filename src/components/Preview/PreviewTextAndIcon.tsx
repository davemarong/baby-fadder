// IMPORT

// Next

// React

// Material UI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

// Icons
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { HearthIcon } from "../../assets/icons/MuiIcons";

// Components

// Styled component
import { AdText } from "../ReUsable/StyledComp/AdText";

// Utils
import { updateFavorites } from "../../utils/Utils";

// Data

// TYPE/INTERFACE
import { Ad, Profile } from "../../types/Types";
type Props = {
  ad: Ad;
  profile: Profile;
  setProfile: (value: Profile) => void;
  jwt: string;
};
// Functional component
export const PreviewTextAndIcon = ({ ad, profile, setProfile, jwt }: Props) => {
  // State

  // Functions

  // Return
  return (
    <>
      <Grid container justifyContent="center">
        <Grid
          container
          justifyContent="flex-end"
          alignItems="flex-start"
          item
          xs={3}
        >
          <IconButton
            onClick={() => {
              updateFavorites(profile, ad, jwt, setProfile);
            }}
          >
            {HearthIcon}
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          <AdText fontSize={0.5} bigText={ad.title}>
            {ad.brand} - {ad.size} - {ad.price}kr
          </AdText>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={8}>
          <Typography>{ad.description}</Typography>
        </Grid>
      </Grid>
    </>
  );
};
