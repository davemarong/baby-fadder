// IMPORT

// Next
import { useRouter } from "next/router";
import Image from "next/image";

// React

// Material UI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";

// Icons
import { HearthIcon } from "../../../src/assets/icons/MuiIcons";
import { BackArrowIcon } from "../../../src/assets/icons/MuiIcons";

// CSS
import styles from "../../../src/components/ClothingAds/Style.module.css";

// Components
import { MainButton } from "../../../src/components/Buttons/MainButton";

// Styled Components
import { ProductText } from "../../../src/components/ReUsable/StyledComp/ProductText";

// Images
import babyclothes from "../../../src/dummyData/images/babyclothes.jpg";

// Data

// TYPE/INTERFACE
import { Ad } from "../../../src/types/Types";
type Props = {
  currentAd: Ad;
};
// Functional component
export const CurrentAdContent = ({ currentAd }: Props) => {
  // State

  // Functions

  // Return
  return (
    <>
      <Grid container justifyContent="center">
        <Grid
          container
          alignItems="flex-end"
          justifyContent="flex-start"
          item
          sm={2}
        >
          <IconButton>{HearthIcon}</IconButton>
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
        <Grid container item sm={4} direction="column" justifyContent="center">
          <ProductText bigText="Selger" fontSize={0.3}>
            {currentAd.name}
          </ProductText>
          <ProductText bigText="Pris" fontSize={0.3}>
            {currentAd.price}kr
          </ProductText>
          <ProductText bigText="Størrelse" fontSize={0.3}>
            {currentAd.size}
          </ProductText>
          <ProductText bigText="Merke" fontSize={0.3}>
            {currentAd.brand}
          </ProductText>
          <ProductText bigText="Tilstand" fontSize={0.3}>
            Lite brukt
          </ProductText>
          <ProductText bigText="Lagt ut" fontSize={0.3}>
            12 november
          </ProductText>
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
  );
};
