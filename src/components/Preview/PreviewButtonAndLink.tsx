// IMPORT

// Next
import { useRouter } from "next/router";

// React

// Material UI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// Components
import { MainButton } from "../Buttons/MainButton";

// Utils

// Data

// Default values
import { defaultValue_Ad } from "../../types/DefaultValues";

// TYPE/INTERFACE
import { Ad } from "../../types/Types";
type Props = {
  setCurrentAd: (value: Ad) => void;
  ad?: Ad;
};
// Functional component
export const PreviewButtonAndLink = (props: Props) => {
  // Props
  const { setCurrentAd, ad = defaultValue_Ad } = props;

  // Router
  const router = useRouter();

  // Functions
  const redirectToAdPage = () => {
    setCurrentAd(ad);
    const slug = ad.title.split(" ").join("_");
    router.push(`/finn/${slug}`);
  };
  // Return
  return (
    <Grid container alignItems="center">
      <Grid item xs={0} sm={5}></Grid>
      <Grid item xs={4} sm={2}>
        <Typography onClick={redirectToAdPage} align="center">
          Les mer
        </Typography>
      </Grid>
      <Grid container justifyContent="flex-end" item xs={8} sm={5}>
        <MainButton>Send melding</MainButton>
      </Grid>
    </Grid>
  );
};
