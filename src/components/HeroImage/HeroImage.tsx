// IMPORT

// Next
import Image from "next/image";

// MUI
import Grid from "@mui/material/Grid";

// Images
import homepage from "../../assets/images/homepage.svg";

// TYPE/INTERFACE

// Functional component
export const HeroImage = () => {
  // State

  // Functions

  // Return
  return (
    <Grid item xs={6}>
      <Image
        src={homepage}
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </Grid>
  );
};
