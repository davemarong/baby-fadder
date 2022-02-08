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
    <Grid container justifyContent="flex-end">
      <MainButton margin="20px" func={redirectToAdPage}>
        Les mer
      </MainButton>
    </Grid>
  );
};
