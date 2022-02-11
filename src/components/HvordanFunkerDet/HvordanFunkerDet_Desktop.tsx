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
export const HvordanFunkerDet_Desktop = () => {
  // State

  // Functions

  // Return
  return (
    <>
      {HvordanFunkerDet_data.map((step: any) => {
        return (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            item
            key={step.id}
            flexWrap="wrap"
          >
            <Grid item>
              <Image
                src={step.image}
                alt="Picture of the author"
                width={200}
                height={200}
              />
            </Grid>
            <Grid
              container
              direction="column"
              item
              sm={4}
              md={3}
              style={{ margin: 40 }}
            >
              <Typography style={{ marginBottom: 10 }} variant="h5">
                {step.title}
              </Typography>
              <Typography>{step.description}</Typography>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};
