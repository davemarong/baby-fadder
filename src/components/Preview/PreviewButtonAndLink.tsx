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
import { Ad, CurrentAd } from "../../types/Types";
type Props = {
  setCurrentAd: (value: CurrentAd) => void;
  ad?: Ad;
  name?: string;
  location?: string;
  profileId?: number;
};
// Functional component
export const PreviewButtonAndLink = (props: Props) => {
  // Props
  const {
    setCurrentAd,
    ad = defaultValue_Ad,
    name = "Ukjent",
    location = "Ukjent",
    profileId = 0,
  } = props;

  // Router
  const router = useRouter();

  // Functions
  const redirectToAdPage = () => {
    setCurrentAd({
      ...ad,
      name: name,
      location: location,
      profileId: profileId,
    });
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
