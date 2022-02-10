// IMPORT

// Next
import type { NextPage } from "next";
import { MainButton } from "../src/components/Buttons/MainButton";

// React

// Material UI

// Components
import { Nav } from "../src/components/Nav/Nav";
import Register from "../src/components/Register/Registrer";
import { Header } from "../src/components/Header/Header";

// Utils

// Data

// TYPE/INTERFACE
type Props = {
  isLogged: boolean;
};
// Functional component
const Registrer = ({ isLogged }: Props) => {
  // State

  // Functions

  // Return
  return (
    <>
      <Nav isLogged={isLogged} />
      <Header align="center" margin={50}>
        Registrer
      </Header>
      <Register>
        <MainButton align="center">Registrer</MainButton>
      </Register>
    </>
  );
};
export default Registrer;
