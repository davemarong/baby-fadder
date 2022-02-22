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
import { Favoritter } from "../src/components/Favoritter/Favoritter";
type Props = {
  isLogged: boolean;
  profile: Profile;
};
const Min_side = ({ isLogged, profile }: Props) => {
  // Media Query
  const matches = useMediaQuery("(min-width:600px)");

  type Fav = {
    [key: number]: number[];
  };
  const fav: Fav = {
    8: [3, 4, 5],
    9: [3, 7, 1],
  };
  const doo = (profileId: number, adId: number) => {
    let newFav;
    if (fav[profileId]) {
      newFav = { ...fav, [profileId]: [...fav[profileId], adId] };
    } else {
      newFav = { ...fav, [profileId]: [adId] };
    }
    console.log(newFav);
  };
  return (
    <>
      <Nav isLogged={isLogged} />
      <Header align="center">Min Side</Header>
      <MinSide profile={profile} />
      <Favoritter profile={profile} />
      <button
        onClick={() => {
          doo(9, 20);
        }}
      >
        Do it
      </button>
    </>
  );
};

export default Min_side;
