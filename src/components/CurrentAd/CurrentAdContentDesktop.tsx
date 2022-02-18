// IMPORT

// Next
import Image from "next/image";

// React
import { ReactNode } from "react";

// Material UI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";

// Icons
import { HearthIcon } from "../../assets/icons/MuiIcons";

// CSS
import styles from "../../../src/components/ClothingAds/Style.module.css";

// Components
import { MainButton } from "../Buttons/MainButton";
import { CurrentAdProductText } from "./CurrentAdProductText";

// Images
import babyclothes from "../../../src/dummyData/images/babyclothes.jpg";

// Utils
import { updateFavorites } from "../../utils/Utils";

// TYPE/INTERFACE
import { CurrentAd, Profile } from "../../types/Types";
type Props = {
  currentAd: CurrentAd;
  children: ReactNode;
  jwt: string;
  profile: Profile;
  setProfile: (value: Profile) => void;
};
// Functional component
export const CurrentAdContentDesktop = ({
  currentAd,
  children,
  jwt,
  profile,
  setProfile,
}: Props) => {
  // State

  // Media Query
  const matches = useMediaQuery("(min-width:600px)");

  // Return
  return (
    <>
      {matches && (
        <>
          <Grid container justifyContent="center">
            <Grid
              container
              alignItems="flex-end"
              justifyContent="flex-start"
              item
              sm={2}
            >
              <IconButton
                onClick={() => {
                  updateFavorites(profile, currentAd, jwt, setProfile);
                }}
              >
                {HearthIcon}
              </IconButton>
            </Grid>
            <Grid container justifyContent="center" item sm={8}>
              <Image
                className={styles.ad_image}
                src={babyclothes}
                height={300}
                width={250}
                alt=""
              />
            </Grid>
            <Grid item sm={2}></Grid>
          </Grid>
          <Grid container style={{ margin: "20px 0" }}>
            <Grid
              container
              item
              sm={4}
              direction="column"
              justifyContent="center"
            >
              {children}
            </Grid>
            <Grid
              container
              alignContent="space-between"
              justifyContent="flex-end"
              item
              sm={8}
            >
              <Typography variant="h6">{currentAd.description}</Typography>
              <MainButton>Send melding</MainButton>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
