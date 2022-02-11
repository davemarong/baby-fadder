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
export const ImageAndContentLayout_Container = ({ children }: Props) => {
  // State

  // Functions

  // Return
  return (
    <Grid style={{ backgroundColor: "#FDF1EF", padding: "50px 0" }} container>
      {children}
    </Grid>
  );
};
