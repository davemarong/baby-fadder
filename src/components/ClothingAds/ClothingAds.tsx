// IMPORT

// Next
import Image from "next/image";

// React
import React, { useState, ReactNode } from "react";

// Material UI
import Grid from "@mui/material/Grid";

// Components
import { MuiModal } from "../ReUsable/Modal/MuiModal";
import { TransparentButton } from "../Buttons/TranparentButton";

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
import { Ad } from "../../types/Types";

type Props = {
  children: any;
  ad?: Ad;
};
// Functional component
export const ClothingAds = (props: Props) => {
  // Props
  const { children, ad = defaultValue_Ad } = props;
  // State
  const [isOpen, setIsOpen] = useState(false);
  // Functions
  const toggleModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
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
        md={3}
        sm={4}
        xs={6}
      >
        <MuiModal open={isOpen} func={toggleModal} width="sm">
          {React.cloneElement(children, { ad: ad })}
        </MuiModal>
        <Image
          className={styles.ad_image}
          src={babyclothes}
          height={200}
          width={150}
          alt=""
        />
        <AdText fontSize={0} bigText={ad.title}>
          {ad.brand} - {ad.size} - {ad.price}kr
        </AdText>
        <TransparentButton func={openModal}>Se mer</TransparentButton>
      </Grid>
    </>
  );
};
