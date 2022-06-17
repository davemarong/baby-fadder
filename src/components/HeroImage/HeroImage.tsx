// IMPORT

// Next
import Image from "next/image";

// React

// Material UI
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

// Components
import { MainButton } from "../Buttons/MainButton";

// CustomHook
import { useRedirectToPage } from "../CustomHook/useRedirectToPage";

// Images
import homepage from "../../assets/images/homepage.svg";

// Data

// TYPE/INTERFACE

// Functional component
export const HeroImage = () => {
  // State

  // customHook
  const redirectToPage = useRedirectToPage();

  // Media Query
  const desktopMatches = useMediaQuery("(min-width:800px)");
  const mobileMatches = useMediaQuery("(max-width:800px)");

  // Functions

  // Return
  return (
    <>
      {desktopMatches && (
        <>
          <Grid item xs={5}>
            <Typography variant="h2">Brukte barne klær</Typography>
            <Typography variant="h5">
              Norges største samling av barne klær.
            </Typography>
            <MainButton align="flex-start">Søk her</MainButton>
          </Grid>
          <Grid item sm={6} md={5}>
            <Image
              src={homepage}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </Grid>
        </>
      )}
      {mobileMatches && (
        <>
          <Typography variant="h2">Brukte barne klær</Typography>
          <Typography align="center" variant="h5">
            Norges største samling av brukte barne klær.
          </Typography>
          <Image
            src={homepage}
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <MainButton
            align="center"
            func={() => {
              redirectToPage("finn");
            }}
          >
            Søk her
          </MainButton>
        </>
      )}
    </>
  );
};
