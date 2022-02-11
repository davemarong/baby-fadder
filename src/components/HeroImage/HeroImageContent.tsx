// IMPORT

// Next
import Image from "next/image";

// React

// Material UI
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Components
import { MainButton } from "../Buttons/MainButton";

// Utils

// Images

// Data

// TYPE/INTERFACE

// Functional component
export const HeroImageContent = () => {
  // State

  // Functions

  // Return
  return (
    <Grid item xs={5}>
      <Typography variant="h2">Babyfadder</Typography>
      <Typography variant="h5">
        Norges største samling av baby klær og utstyr.
      </Typography>
      <MainButton align="flex-start">Søk her</MainButton>
    </Grid>
  );
};
