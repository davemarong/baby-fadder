// IMPORT

// Next
import type { NextPage } from "next";

// React

// Material UI
import Container from "@mui/material/Container";

// Components
import { Nav } from "../src/components/Nav/Nav";
import Login from "../src/components/Login/Login";

// Utils

// Data

// TYPE/INTERFACE
import { ProfileObject } from "../src/types/Types";
import { MainButton } from "../src/components/Buttons/MainButton";
import { Header } from "../src/components/Header/Header";
type Props = {
  jwt: string;
  setJwt: (value: string) => void;
  profile: ProfileObject;
  setProfile: (value: ProfileObject) => void;
};
// Functional component
const LoggInn = ({ jwt, setJwt, setProfile, profile }: Props) => {
  // State

  // Functions

  // Props object
  const LoginProps = {
    jwt: jwt,
    setJwt: setJwt,
    setProfile: setProfile,
    profile: profile,
  };

  // Return
  return (
    <>
      <Nav />
      <Header align="center" margin={50}>
        Logg inn
      </Header>
      <Login {...LoginProps}>
        <MainButton align="center">Logg inn</MainButton>
      </Login>
    </>
  );
};
export default LoggInn;
