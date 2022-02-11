// IMPORT

// Next

// React

// Material UI
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// Components

// Utils

// Data

// TYPE/INTERFACE
type Props = {
  children: any;
};

// Functional component
export const HeroImageContainer = ({ children }: Props) => {
  // State

  // Functions

  // Return
  return (
    <Container maxWidth="lg">
      <Grid container alignItems="center" justifyContent="center" wrap="wrap">
        {children}
      </Grid>
    </Container>
  );
};
