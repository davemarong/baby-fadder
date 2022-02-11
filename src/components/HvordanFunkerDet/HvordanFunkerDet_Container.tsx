// IMPORT

// Next

// React

// Material UI
import Grid from "@mui/material/Grid";

// Components

// Utils

// Data

// TYPE/INTERFACE
type Props = {
  children: any;
};
// Functional component
export const HvordanFunkerDet_Container = ({ children }: Props) => {
  // State

  // Functions

  // Return
  return (
    <Grid container justifyContent="center" style={{ margin: "50px 0" }}>
      {children}
    </Grid>
  );
};
