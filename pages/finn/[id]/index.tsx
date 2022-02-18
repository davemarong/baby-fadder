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
import { CurrentAd, Profile } from "../../../src/types/Types";
type Props = {
  currentAd: CurrentAd;
  isLogged: boolean;
  jwt: string;
  profile: Profile;
  setProfile: (value: Profile) => void;
};
// Functional component
const CurrentAdPage = ({
  currentAd,
  isLogged,
  jwt,
  profile,
  setProfile,
}: Props) => {
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
    jwt: jwt,
    profile: profile,
    setProfile: setProfile,
  };
  console.log(currentAd);
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
