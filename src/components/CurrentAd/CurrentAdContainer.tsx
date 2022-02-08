// IMPORT

// Next
import { useRouter } from "next/router";

// React
import { ReactNode } from "react";

// Material UI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";

// Components

// Icons
import { BackArrowIcon } from "../../../src/assets/icons/MuiIcons";

// Utils

// Data

// TYPE/INTERFACE
import { CurrentAd } from "../../../src/types/Types";
type Props = {
  currentAd: CurrentAd;
  children: ReactNode;
};
// Functional component
export const CurrentAdContainer = ({ currentAd, children }: Props) => {
  // Media Query
  const mobileMatches = useMediaQuery("(max-width:600px)");
  const desktopMatches = useMediaQuery("(min-width:600px)");

  // Router
  const router = useRouter();

  // Functions
  const redirectBack = () => {
    router.back();
  };
  // Props object
  const CurrentAdContentProps = {
    currentAd: currentAd,
  };

  // Return
  return (
    <Container maxWidth="md">
      <Grid container direction="column" alignItems="center">
        <Grid container justifyContent="flex-start">
          <IconButton onClick={redirectBack}>{BackArrowIcon}</IconButton>
        </Grid>
        <Typography style={{ margin: 20 }} align="center" variant="h3">
          {currentAd.title}
        </Typography>
        {children}
      </Grid>
    </Container>
  );
};
