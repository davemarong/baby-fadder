// IMPORT

// Next

// React

// Material UI
import useMediaQuery from "@mui/material/useMediaQuery";

// Components
import { Nav } from "../src/components/Nav/Nav";
import { HeroImageContainer } from "../src/components/HeroImage/HeroImageContainer";
import { HeroImage } from "../src/components/HeroImage/HeroImage";
import { HvordanFunkerDet_Desktop } from "../src/components/HvordanFunkerDet/HvordanFunkerDet_Desktop";
import { HvordanFunkerDet_Mobile } from "../src/components/HvordanFunkerDet/HvordanFunkerDet_Mobile";
import { ImageAndContentLayout_Container } from "../src/components/ImageAndContentLayout/ImageAndContentLayout_Container";
import { ImageAndContentLayout } from "../src/components/ImageAndContentLayout/ImageAndContentLayout";

// Utils

// Data

// Image

// TYPE/INTERFACE
type Props = {
  isLogged: boolean;
};
const Home = ({ isLogged }: Props) => {
  // Media Query
  const matches = useMediaQuery("(min-width:600px)");
  const HvordanFunkerDet = matches
    ? HvordanFunkerDet_Desktop
    : HvordanFunkerDet_Mobile;

  return (
    <>
      <Nav isLogged={isLogged} />
      <HeroImageContainer>
        <HeroImage />
      </HeroImageContainer>
      <HvordanFunkerDet />
      <ImageAndContentLayout_Container>
        <ImageAndContentLayout />
      </ImageAndContentLayout_Container>
    </>
  );
};

export default Home;
