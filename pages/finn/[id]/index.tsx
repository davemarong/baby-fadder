// IMPORT

// Next

// React

// Material UI
import useMediaQuery from "@mui/material/useMediaQuery";

// Components
import { CurrentAdContainer } from "../../../src/components/CurrentAd/CurrentAdContainer";
import { CurrentAdContentDesktop } from "../../../src/components/CurrentAd/CurrentAdContentDesktop";
import { CurrentAdContentMobile } from "../../../src/components/CurrentAd/CurrentAdContentMobile";
import { CurrentAdProductText } from "../../../src/components/CurrentAd/CurrentAdProductText";

// Utils

// Data

// TYPE/INTERFACE
import { Ad } from "../../../src/types/Types";
type Props = {
  currentAd: Ad;
};
// Functional component
const CurrentAdPage = ({ currentAd }: Props) => {
  // State

  // Media Query
  const matches = useMediaQuery("(min-width:600px)");
  const CurrentAdContent = matches
    ? CurrentAdContentDesktop
    : CurrentAdContentMobile;

  // Functions

  // Props object
  const CurrentAdProp = {
    currentAd: currentAd,
  };
  // Return
  return (
    <CurrentAdContainer {...CurrentAdProp}>
      <CurrentAdContent {...CurrentAdProp}>
        <CurrentAdProductText {...CurrentAdProp} />
      </CurrentAdContent>
    </CurrentAdContainer>
  );
};
export default CurrentAdPage;
