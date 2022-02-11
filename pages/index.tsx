// IMPORT

// Next

// React

// Material UI
import useMediaQuery from "@mui/material/useMediaQuery";

// Components
import { Nav } from "../src/components/Nav/Nav";
import { HeroImage } from "../src/components/HeroImage/HeroImage";
import { HeroImageContainer } from "../src/components/HeroImage/HeroImageContainer";
import { HeroImageContent } from "../src/components/HeroImage/HeroImageContent";
import { HvordanFunkerDet_Desktop } from "../src/components/HvordanFunkerDet/HvordanFunkerDet_Desktop";
import { HvordanFunkerDet_Mobile } from "../src/components/HvordanFunkerDet/HvordanFunkerDet_Mobile";

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
        <HeroImageContent />
        <HeroImage />
      </HeroImageContainer>
      <HvordanFunkerDet />
    </>
  );
};

export default Home;
