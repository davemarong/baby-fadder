// IMPORT

// Next
import Image from "next/image";
import Link from "next/link";

// React

// Material UI
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

// Icons
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

// CSS
import styles from "./Style.module.css";

// Components
import { MainButton } from "../Buttons/MainButton";

// Styled component
import { AdText } from "./StyledComp/AdText";

// Utils

// Images
import babyclothes from "../../dummyData/images/babyclothes.jpg";

// Data

// TYPE/INTERFACE
import { Ad } from "../../types/Types";
type Props = {
  ad?: Ad;
};

// Functional component
export const PreviewCard = (props: Props) => {
  // Props
  const {
    ad = {
      title: "",
      id: 0,
      description: "",
      brand: "",
      price: 0,
      gender: "",
      size: "",
      color: "",
      clothingType: "",
      img: "",
    },
  } = props;
  // State

  // Functions

  // Return
  return (
    <Card>
      <Grid container direction="column" alignItems="center">
        <Grid container justifyContent="flex-end">
          <IconButton>
            <CloseRoundedIcon />
          </IconButton>
        </Grid>
        <Image
          className={styles.ad_image}
          src={babyclothes}
          height={300}
          width={250}
          alt=""
        />
        <Grid container justifyContent="center">
          <Grid
            container
            justifyContent="flex-end"
            alignItems="flex-start"
            item
            xs={3}
          >
            <IconButton size="large">
              <FavoriteBorderRoundedIcon fontSize="inherit" />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <AdText fontSize={0.5} bigText={ad.title}>
              {ad.brand} - {ad.size} - {ad.price}kr
            </AdText>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Grid container justifyContent="center" xs={8}>
          <Typography>{ad.description}</Typography>
        </Grid>
        <Grid container alignItems="center">
          <Grid item xs={5}></Grid>
          <Grid item xs={2}>
            <Typography align="center">
              <Link href="">
                <a>Les mer</a>
              </Link>
            </Typography>
          </Grid>
          <Grid container justifyContent="flex-end" item xs={5}>
            <MainButton>Send melding</MainButton>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
