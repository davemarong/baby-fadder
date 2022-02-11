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
import { Miljøvennlig } from "../src/components/Miljøvennlig/Miljøvennlig";
import { Header } from "../src/components/Header/Header";
import { MainButton } from "../src/components/Buttons/MainButton";
import { HvordanFunkerDet_Container } from "../src/components/HvordanFunkerDet/HvordanFunkerDet_Container";

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
      <Header align="center">Hvordan funker det?</Header>
      <HvordanFunkerDet_Container>
        <HvordanFunkerDet />
        <MainButton align="center">Registrer deg</MainButton>
      </HvordanFunkerDet_Container>
      <Miljøvennlig />
    </>
  );
};

export default Home;
