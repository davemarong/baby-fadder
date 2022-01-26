// IMPORT

// Next
import type { NextPage } from "next";

// React
import React from "react";

// Material UI

// Components
import { Nav } from "../src/components/Nav/Nav";
import { SearchField } from "../src/components/ReUsable/SearchField/SearchField";
import { SelectField } from "../src/components/SelectField/SelectField";
import { ClothingAds } from "../src/components/ClothingAds/ClothingAds";

// Utils

// Data
import filterOptions from "../src/dummyData/FilterOptions";
import { SelectFieldContainer } from "../src/components/SelectField/SelectFieldContainer";

// TYPE/INTERFACE
type FilterOptions = {
  title: string;
  options: Options[];
};

type Options = {
  value: string;
};

// Functional component
const Finn: NextPage = () => {
  // State

  // Return
  return (
    <>
      <Nav />
      <SearchField
        placeholder="Søk etter klær"
        suggestions="Body, genser, sko, stilongs"
      />
      <SelectFieldContainer>
        <SelectField />
      </SelectFieldContainer>
      <ClothingAds />
    </>
  );
};
export default Finn;
