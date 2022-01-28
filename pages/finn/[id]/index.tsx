// IMPORT

// Next

// React

// Material UI

// Components
import { CurrentAdContainer } from "../../../src/components/CurrentAd/CurrentAdContainer";
import { CurrentAdContent } from "../../../src/components/CurrentAd/CurrentAdContent";
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

  // Functions

  // Props object
  const CurrentAdProp = {
    currentAd: currentAd,
  };
  // Return
  return (
    <CurrentAdContainer {...CurrentAdProp}>
      {/* Desktop */}
      <CurrentAdContent {...CurrentAdProp}>
        <CurrentAdProductText {...CurrentAdProp} />
      </CurrentAdContent>

      {/* Mobile */}
      <CurrentAdContentMobile {...CurrentAdProp}>
        <CurrentAdProductText {...CurrentAdProp} />
      </CurrentAdContentMobile>
    </CurrentAdContainer>
  );
};
export default CurrentAdPage;
