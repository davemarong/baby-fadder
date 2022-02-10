// IMPORT

// Next
import type { NextPage } from "next";

// React

// Material UI

// Components
import { Nav } from "../src/components/Nav/Nav";

// Utils

// Data

// TYPE/INTERFACE
type Props = {
  isLogged: boolean;
};
// Functional component
const OmOss = ({ isLogged }: Props) => {
  // State

  // Functions

  // Return
  return (
    <>
      <Nav isLogged={isLogged} />
    </>
  );
};
export default OmOss;
