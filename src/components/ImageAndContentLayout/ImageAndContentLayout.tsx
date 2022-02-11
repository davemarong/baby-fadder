// IMPORT

// Next
import Image from "next/image";

// React

// Material UI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

// Components

// Utils

// Images
import motherAndChild from "../../assets/images/motherAndChild.svg";

// Data

// TYPE/INTERFACE

// Functional component
export const ImageAndContentLayout = () => {
  // State

  // Media Query
  const desktopMatches = useMediaQuery("(min-width:800px)");
  const mobileMatches = useMediaQuery("(max-width:800px)");

  // Functions
  const description = `Dette er noen stikkeord som beskriver BabyFadder. Her kan du finne andre
foreldrene i ditt nærområde, ente du vil selge, kjøpe eller la noen arve
baby utstyr/ klær.`;

  const title = `Miljøvennlig.<br /> Givende.<br /> Billig.`;
  // Return
  return (
    <>
      {mobileMatches && (
        <Grid container direction="column" alignItems="center">
          <Typography variant="h4" align="center">
            Miljøvennlig.
            <br /> Givende.
            <br /> Billig.
          </Typography>
          <Image
            src={motherAndChild}
            alt="Picture of the author"
            width={400}
            height={400}
          />
          <Typography style={{ maxWidth: 500, margin: 20 }} align="center">
            {description}
          </Typography>
        </Grid>
      )}
      {desktopMatches && (
        <>
          <Grid container justifyContent="center" alignItems="center">
            <Image
              src={motherAndChild}
              alt="Picture of the author"
              width={400}
              height={400}
            />
            <Grid item sm={5} md={4} style={{ margin: 40 }}>
              <Typography variant="h4" align="center">
                Miljøvennlig.
                <br /> Givende.
                <br /> Billig.
              </Typography>
              <Typography style={{ margin: "20px" }} align="center">
                {description}
              </Typography>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
