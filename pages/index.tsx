// IMPORT

// Next
import { useRouter } from "next/router";
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

// Custom hook
import { useRedirectToPage } from "../src/components/CustomHook/useRedirectToPage";

// Data

// Image

// TYPE/INTERFACE
import { Profile } from "../src/types/Types";
type Props = {
  isLogged: boolean;
};

const Home = ({ isLogged }: Props) => {
  // Media Query
  const matches = useMediaQuery("(min-width:600px)");
  const HvordanFunkerDet = matches
    ? HvordanFunkerDet_Desktop
    : HvordanFunkerDet_Mobile;

  const redirectToPage = useRedirectToPage();

  return (
    <>
      <Nav isLogged={isLogged} />
      <HeroImageContainer>
        <HeroImage />
      </HeroImageContainer>
      <Header align="center">Hvordan funker det?</Header>
      <HvordanFunkerDet_Container>
        <HvordanFunkerDet />
        <MainButton
          align="center"
          func={() => {
            redirectToPage("registrer");
          }}
        >
          Registrer deg
        </MainButton>
      </HvordanFunkerDet_Container>
      <Miljøvennlig />
    </>
  );
};

export default Home;
