// IMPORT

// Next

// React

// Material UI

// Components
import { Favoritter } from "../src/components/Favoritter/Favoritter";
import { Nav } from "../src/components/Nav/Nav";

// Utils

// Data

// TYPE/INTERFACE
import { Profile } from "../src/types/Types";
type Props = {
  profile: Profile;
  isLogged: boolean;
};
// Functional component
const FavoritterPage = ({ profile, isLogged }: Props) => {
  // Return
  return (
    <>
      <Nav isLogged={isLogged} />
      <Favoritter profile={profile} />
    </>
  );
};
export default FavoritterPage;
