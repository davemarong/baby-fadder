// IMPORT

// Next
import type { NextPage } from "next";

// React
import React, { useState, useEffect } from "react";

// Material UI

// Icon

// Components
import { Nav } from "../src/components/Nav/Nav";
import { SearchField } from "../src/components/ReUsable/SearchField/SearchField";
import { SelectField } from "../src/components/SelectField/SelectField";
import { ClothingAds } from "../src/components/ClothingAds/ClothingAds";
import { SelectFieldContainer } from "../src/components/SelectField/SelectFieldContainer";

// Utils

// Data
import { profiles } from "../src/dummyData/Profiles";

// TYPE/INTERFACE
import { Profile } from "../src/types/Types";

// Functional component
const Finn: NextPage = () => {
  // State
  const [filterCategories, setFilterCategories] = useState({
    gender: "",
    size: "",
    color: "",
  });
  const [profileData, setProfileData] = useState<Profile>([
    {
      name: "",
      id: 0,
      ad: [
        {
          title: "",
          description: "",
          brand: "",
          price: 0,
          gender: "",
          size: "",
          color: "",
          clothingType: "",
          img: "",
        },
      ],
    },
  ]);

  // UseEffect
  useEffect(() => {
    setProfileData(profiles);
  }, []);

  // Props object
  const SearchFieldProps = {
    placeholder: "Søk etter klær",
    suggestions: "Body, genser, sko, stilongs",
    filterCategories: filterCategories,
    setProfileData: setProfileData,
  };
  const SelectFieldProps = {
    setFilterCategories: setFilterCategories,
    filterCategories: filterCategories,
  };
  const ClothingAdsProps = {
    profileData: profileData,
  };
  // Return
  return (
    <>
      <Nav />
      <SearchField {...SearchFieldProps} />
      <SelectFieldContainer>
        <SelectField {...SelectFieldProps} />
      </SelectFieldContainer>
      <ClothingAds {...ClothingAdsProps} />
    </>
  );
};
export default Finn;
