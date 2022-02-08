// IMPORT

// Next
import type { NextPage } from "next";

// React

// Material UI

// Components
import { Nav } from "../src/components/Nav/Nav";
import Login from "../src/components/Login/Login";

// Utils

// Data

// TYPE/INTERFACE
import { ProfileObject } from "../src/types/Types";
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
  console.log(profile, jwt);
  // Return
  return (
    <>
      <Nav />
      <Login {...LoginProps} />
    </>
  );
};
export default LoggInn;
