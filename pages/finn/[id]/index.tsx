// IMPORT

// Next
import { useRouter } from "next/router";
import Image from "next/image";

// React

// Material UI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";

// Icons
import { HearthIcon } from "../../../src/assets/icons/MuiIcons";
import { BackArrowIcon } from "../../../src/assets/icons/MuiIcons";

// CSS
import styles from "../../../src/components/ClothingAds/Style.module.css";

// Components
import { MainButton } from "../../../src/components/Buttons/MainButton";

// Styled Components
import { ProductText } from "../../../src/components/ReUsable/StyledComp/ProductText";

// Utils

// Images
import babyclothes from "../../../src/dummyData/images/babyclothes.jpg";

// Data

// TYPE/INTERFACE
import { Ad } from "../../../src/types/Types";
import { CurrentAdContent } from "../../../src/components/CurrentAd/CurrentAdContent";
import { CurrentAdContentMobile } from "../../../src/components/CurrentAd/CurrentAdContentMobile";
type Props = {
  currentAd: Ad;
};
// Functional component
const Produkt = ({ currentAd }: Props) => {
  // State

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
        {mobileMatches && <CurrentAdContentMobile {...CurrentAdContentProps} />}
        {desktopMatches && <CurrentAdContent {...CurrentAdContentProps} />}
      </Grid>
    </Container>
  );
};
export default Produkt;
