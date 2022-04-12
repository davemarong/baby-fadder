// IMPORT

// Next
import Image from "next/image";

// React
import { useEffect, useState } from "react";

// Material UI
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

// Icon
import { DeleteIcon } from "../../assets/icons/MuiIcons";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

// Styled Components
import { AdText } from "../ReUsable/StyledComp/AdText";

// Components

// CustomHook
import { useRemoveFavoriteAd } from "../CustomHook/useRemoveFavoriteAd";

// Utils

// Images
import clothesImage from "../../assets/images/pexels-polina-tankilevitch-3875080.jpg";

// Styles
import styles from "../../styles/Style.module.css";

// Data

// TYPE/INTERFACE
import { FavorittAnnonser, Ad, Profile } from "../../types/Types";

type Props = {
  // When using the type "FavorittAnnonser" on Profile, I get an error
  adsProfile: any;
  profile: Profile;
  removeFavoriteAd: any;
};

// Functional component
export const FavoritesListItem = ({
  // adsProfile = owner of the ads that has been marked as favorites
  adsProfile,
  removeFavoriteAd,
  // profile = the user that is logged in
  profile,
}: Props) => {
  console.log("adsProfile", adsProfile);
  console.log("profile", profile);
  console.log("removeFavoriteAd", removeFavoriteAd);
  // Return
  return (
    <>
      {adsProfile.ads.map((ad: Ad, id: number) => {
        return (
          <Grid
            container
            item
            sm={5}
            key={ad.id}
            flexWrap="nowrap"
            style={{ margin: "40px 0" }}
          >
            <Grid container item justifyContent="flex-end" xs={5}>
              <Image
                className={styles.ad_image}
                src={clothesImage}
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </Grid>
            <Grid xs={5} item container alignItems="center" wrap="nowrap">
              <Grid item>
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
            <Grid item container xs={2}>
              <IconButton
                onClick={() => {
                  removeFavoriteAd(profile.favorites, ad.profileId, ad.id);
                }}
              >
                {DeleteIcon}
              </IconButton>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};
