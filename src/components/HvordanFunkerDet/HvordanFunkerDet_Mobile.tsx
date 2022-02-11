// IMPORT

// Next
import Image from "next/image";

// React

// Material UI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// Components

// Utils

// Data
import HvordanFunkerDet_data from "./Data";

// TYPE/INTERFACE

// Functional component
export const HvordanFunkerDet_Mobile = () => {
  // State

  // Functions

  // Return
  return (
    <>
      {HvordanFunkerDet_data.map((step: any) => {
        return (
          <Grid
            container
            direction="column"
            alignItems="center"
            item
            key={step.id}
            flexWrap="wrap"
            style={{ margin: 30 }}
          >
            <Typography variant="h5">{step.title}</Typography>
            <Image
              src={step.image}
              alt="Picture of the author"
              width={200}
              height={200}
            />
            <Typography style={{ margin: 10 }} align="center">
              {step.description}
            </Typography>
          </Grid>
        );
      })}
    </>
  );
};
