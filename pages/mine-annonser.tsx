// IMPORT

// Next

// React

// Material UI
import useMediaQuery from "@mui/material/useMediaQuery";

// Components
import { Nav } from "../src/components/Nav/Nav";
import { MineAnnonser } from "../src/components/MineAnnonser/MineAnnonser";
import { MinSideMenu } from "../src/components/MinSideMenu/MinSideMenu";
import { Header } from "../src/components/Header/Header";

// Utils

// Data

// Image

// TYPE/INTERFACE
import { Profile, CurrentAd } from "../src/types/Types";
type Props = {
  isLogged: boolean;
  profile: Profile;
  setCurrentAd: (value: CurrentAd) => void;
  jwt: string;
  setProfile: (value: Profile) => void;
};
const Mine_Annonser = ({
  isLogged,
  profile,
  setCurrentAd,
  jwt,
  setProfile,
}: Props) => {
  // Media Query
  const matches = useMediaQuery("(min-width:600px)");

  // Props
  const MineAnnonserProps = {
    profile: profile,
    setCurrentAd: setCurrentAd,
    setProfile: setProfile,
    jwt: jwt,
  };
  return (
    <>
      <Nav isLogged={isLogged} />
      <Header align="center">Mine Annonser</Header>
      <MinSideMenu />
      <MineAnnonser {...MineAnnonserProps} />
    </>
  );
};

export default Mine_Annonser;
