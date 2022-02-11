// IMPORT

// Next

// React

// Material UI
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  // Media Query
  const matches = useMediaQuery("(min-width:600px)");
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
