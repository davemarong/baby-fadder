// IMPORT

// Next

// React

// Material UI

// Components

// Styled Components
import { ProductText } from "../../../src/components/ReUsable/StyledComp/ProductText";

// Utils

// Data

// TYPE/INTERFACE
import { Ad } from "../../../src/types/Types";
type Props = {
  currentAd: Ad;
};
// Functional component
export const CurrentAdProductText = ({ currentAd }: Props) => {
  // State

  // Functions

  // Return
  return (
    <>
      <ProductText bigText="Selger" fontSize={0.3}>
        {currentAd.name}
      </ProductText>
      <ProductText bigText="Pris" fontSize={0.3}>
        {currentAd.price}kr
      </ProductText>
      <ProductText bigText="Størrelse" fontSize={0.3}>
        {currentAd.size}
      </ProductText>
      <ProductText bigText="Merke" fontSize={0.3}>
        {currentAd.brand}
      </ProductText>
      <ProductText bigText="Tilstand" fontSize={0.3}>
        Lite brukt
      </ProductText>
      <ProductText bigText="Lagt ut" fontSize={0.3}>
        12 november
      </ProductText>
    </>
  );
};
