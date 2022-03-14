// IMPORT

// Next

// React

// Material UI
import useMediaQuery from "@mui/material/useMediaQuery";

// Components
import { Nav } from "../src/components/Nav/Nav";
import { Header } from "../src/components/Header/Header";
import { MinSide } from "../src/components/MinSide/MinSide";

// Utils

// Data

// Image

// TYPE/INTERFACE
import { Profile } from "../src/types/Types";
type Props = {
  isLogged: boolean;
  profile: Profile;
};
const Min_side = ({ isLogged, profile }: Props) => {
  // Media Query
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Nav isLogged={isLogged} />
      <Header align="center">Min Side</Header>
      <MinSide profile={profile} />
    </>
  );
};

export default Min_side;
