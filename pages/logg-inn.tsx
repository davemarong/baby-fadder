// IMPORT

// Next
import type { NextPage } from "next";

// React

// Material UI
import Container from "@mui/material/Container";

// Components
import { Nav } from "../src/components/Nav/Nav";
import Login from "../src/components/Login/Login";
import { MainButton } from "../src/components/Buttons/MainButton";
import { Header } from "../src/components/Header/Header";

// Utils

// Data

// TYPE/INTERFACE
import { ProfileObject } from "../src/types/Types";

type Props = {
  setJwt: (value: string) => void;
  setProfile: (value: ProfileObject) => void;
  setIsLogged: (value: boolean) => void;
  isLogged: boolean;
};
// Functional component
const LoggInn = ({ setJwt, setProfile, setIsLogged, isLogged }: Props) => {
  // State

  // Functions

  // Props object
  const LoginProps = {
    setJwt: setJwt,
    setProfile: setProfile,
    setIsLogged: setIsLogged,
  };

  // Return
  return (
    <>
      <Nav isLogged={isLogged} />
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
