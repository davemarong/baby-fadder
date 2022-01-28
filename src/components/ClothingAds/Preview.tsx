// IMPORT

// Next
import Image from "next/image";

// React

// Material UI
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

// Icons
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// CSS
import styles from "./Style.module.css";

// Components
import { PreviewButtonAndLink } from "./PreviewButtonAndLink";
import { PreviewTextAndIcon } from "./PreviewTextAndIcon";

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
export const Preview = (props: Props) => {
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
        <PreviewTextAndIcon ad={ad} />
        <PreviewButtonAndLink />
      </Grid>
    </Card>
  );
};
