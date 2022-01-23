// IMPORT

// Next
import type { NextPage } from "next";
import { ClothingAds } from "../src/components/ClothingAds/ClothingAds";

// React

// Material UI

// Components
import { Nav } from "../src/components/Nav/Nav";
import { SearchField } from "../src/components/ReUsable/SearchField/SearchField";

// Utils

// Data

// TYPE/INTERFACE

// Functional component
const Finn: NextPage = () => {
  // State

  // Functions

  // Return
  return (
    <>
      <Nav />
      <SearchField
        placeholder="Søk etter klær"
        suggestions="Body, genser, sko, stilongs"
        // func={null}
      />
      <ClothingAds />
    </>
  );
};
export default Finn;
