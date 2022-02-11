// IMPORT

// Next

// React

// Material UI
import useMediaQuery from "@mui/material/useMediaQuery";

// Components
import { Nav } from "../src/components/Nav/Nav";
import { MineAnnonser } from "../src/components/MineAnnonser/MineAnnonser";

// Utils

// Data

// Image

// TYPE/INTERFACE
import { Profile } from "../src/types/Types";
import { Header } from "../src/components/Header/Header";
type Props = {
  isLogged: boolean;
  profile: Profile;
};
const Mine_Annonser = ({ isLogged, profile }: Props) => {
  // Media Query
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Nav isLogged={isLogged} />
      <Header align="center">Mine Annonser</Header>
      <MineAnnonser profile={profile} />
    </>
  );
};

export default Mine_Annonser;
