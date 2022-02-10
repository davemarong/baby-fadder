// IMPORT

// Next
import Image from "next/image";

// React
import React, { useState, ReactNode } from "react";

// Material UI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

// Icon
import { ArrowDownIcon, ArrowUpIcon } from "../../assets/icons/MuiIcons";
// Components
import { MuiModal } from "../ReUsable/Modal/MuiModal";
import { TransparentButton } from "../Buttons/TranparentButton";
import { PreviewButtonAndLink } from "../Preview/PreviewButtonAndLink";
// Styled component
import { AdText } from "../ReUsable/StyledComp/AdText";

// CSS
import styles from "./Style.module.css";

// Utils

// Data

// Images
import babyclothes from "../../dummyData/images/babyclothes.jpg";

// Default values
import { defaultValue_Ad } from "../../types/DefaultValues";

// TYPE/INTERFACE
import { Ad, CurrentAd } from "../../types/Types";

type Props = {
  children: any;
  ad?: Ad;
  setCurrentAd: (value: CurrentAd) => void;
  name?: string;
  location?: string;
  profileId?: number;
};
// Functional component
export const ClothingAdMobile = (props: Props) => {
  // Props
  const {
    children,
    setCurrentAd,
    ad = defaultValue_Ad,
    name = "Ukjent",
    location = "Ukjent",
    profileId = 0,
  } = props;

  // State
  const [isOpen, setIsOpen] = useState(false);
  const [mobilePreview, setMobilePreview] = useState(false);

  // Media Query
  const mobileMatches = useMediaQuery("(max-width:600px)");
  const desktopMatches = useMediaQuery("(min-width:600px)");

  // Functions
  const toggleModal = () => {
    if (desktopMatches) {
      setIsOpen(!isOpen);
    }
  };
  const toggleMobilePreview = () => {
    setMobilePreview(!mobilePreview);
  };
  // Return
  return (
    <>
      <Grid
        style={{ marginTop: 50 }}
        key={ad.title}
        container
        direction="column"
        alignItems="center"
        item
        xs={12}
      >
        <Image
          className={styles.ad_image}
          src={babyclothes}
          height={250}
          width={225}
          alt=""
        />
        <AdText fontSize={0} bigText={ad.title}>
          {ad.brand} - {ad.size} - {ad.price}kr
        </AdText>
        {mobilePreview && (
          <Grid style={{ margin: "0 20px" }}>
            <Typography>{ad.description}</Typography>
            <PreviewButtonAndLink
              setCurrentAd={setCurrentAd}
              ad={ad}
              name={name}
              location={location}
              profileId={profileId}
            />
          </Grid>
        )}
        {!mobilePreview && (
          <TransparentButton func={toggleMobilePreview} icon={ArrowDownIcon}>
            Se mer
          </TransparentButton>
        )}
      </Grid>
    </>
  );
};
