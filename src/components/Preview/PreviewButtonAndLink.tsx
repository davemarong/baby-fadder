// IMPORT

// Next
import Link from "next/link";

// React

// Material UI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// Components
import { MainButton } from "../Buttons/MainButton";

// Utils

// Data

// TYPE/INTERFACE

// Functional component
export const PreviewButtonAndLink = () => {
  // State

  // Functions

  // Return
  return (
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
  );
};
