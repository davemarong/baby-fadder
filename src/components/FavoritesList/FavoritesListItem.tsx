// IMPORT

// Next
import Image from "next/image";

// React
import { useEffect, useState } from "react";

// Material UI
import Grid from "@mui/material/Grid";

// Styled Components
import { AdText } from "../ReUsable/StyledComp/AdText";

// Components

// Utils

// Images
import clothesImage from "../../assets/images/pexels-polina-tankilevitch-3875080.jpg";

// Styles
import styles from "../../styles/Style.module.css";

// Data

// TYPE/INTERFACE
import { FavorittAnnonser, Ad } from "../../types/Types";

type Props = {
  // When using the type "FavorittAnnonser" on Profile, I get an error
  profile: any;
};

// Functional component
export const FavoritesListItem = ({ profile }: Props) => {
  // Destructuring

  // Return
  return (
    <>
      {profile.ads.map((ad: Ad, id: number) => {
        return (
          <Grid
            container
            item
            sm={5}
            key={ad.id}
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
    </>
  );
};
