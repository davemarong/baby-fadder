// IMPORT

// Next
import Image from "next/image";

// React
import React, { useState, ReactNode } from "react";

// Material UI
import Grid from "@mui/material/Grid";

// Components
import { MuiModal } from "../ReUsable/Modal/MuiModal";

// Styled component
import { AdText } from "./StyledComp/AdText";

// CSS
import styles from "./Style.module.css";

// Utils

// Data

// Images
import babyclothes from "../../dummyData/images/babyclothes.jpg";

// TYPE/INTERFACE
import { Ad } from "../../types/Types";
import { Profile } from "../../types/Types";
import { TransparentButton } from "../Buttons/TranparentButton";
import { PreviewCard } from "./PreviewCard";

type ProfileMapped = {
  name: string;
  id: number;
  ad: Ad[];
};
type Props = {
  children: any;
  ad?: Ad;
};
// Functional component
export const ClothingAds = (props: Props) => {
  // Props
  const {
    children,
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
