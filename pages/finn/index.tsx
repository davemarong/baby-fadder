// IMPORT

// Next
import type { NextPage } from "next";

// React
import React, { useState, useEffect } from "react";

// Material UI
import useMediaQuery from "@mui/material/useMediaQuery";

// Icon

// Components
import { Nav } from "../../src/components/Nav/Nav";
import { SearchField } from "../../src/components/ReUsable/SearchField/SearchField";
import { SelectField } from "../../src/components/SelectField/SelectField";
import { SelectFieldContainer } from "../../src/components/SelectField/SelectFieldContainer";
import { ClothingAds } from "../../src/components/ClothingAds/ClothingAds";
import { ClothingAdMobile } from "../../src/components/ClothingAds/ClothingAdMobile";
import { ClothingAdsContainer } from "../../src/components/ClothingAds/ClothingAdsContainer";
import { Preview } from "../../src/components/Preview/Preview";

// Utils

// Data
import { profiles } from "../../src/dummyData/Profiles";

// Default value
import {
  defaultValue_Profile,
  defaultValue_FilterCategories,
} from "../../src/types/DefaultValues";

// TYPE/INTERFACE
import { Profile } from "../../src/types/Types";
import { Ad } from "../../src/types/Types";
import { PreviewButtonAndLink } from "../../src/components/Preview/PreviewButtonAndLink";
type Props = {
  currentAd: Ad;
  setCurrentAd: (value: Ad) => void;
};

// Functional component
const Finn = ({ currentAd, setCurrentAd }: Props) => {
  // State
  const [filterCategories, setFilterCategories] = useState(
    defaultValue_FilterCategories
  );
  const [profileData, setProfileData] = useState<Profile>(profiles);

  // Media Query
  const matches = useMediaQuery("(min-width:600px)");
  const ClothingAd = matches ? ClothingAds : ClothingAdMobile;

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
  const ClothingAdsContainerProps = {
    profileData: profileData,
  };
  const setCurrentAdProp = {
    setCurrentAd: setCurrentAd,
  };

  // Return
  return (
    <>
      <Nav />
      <SearchField {...SearchFieldProps} />
      <SelectFieldContainer>
        <SelectField {...SelectFieldProps} />
      </SelectFieldContainer>
      <ClothingAdsContainer {...ClothingAdsContainerProps}>
        <ClothingAd {...setCurrentAdProp}>
          <Preview>
            <PreviewButtonAndLink {...setCurrentAdProp} />
          </Preview>
        </ClothingAd>
      </ClothingAdsContainer>
    </>
  );
};
export default Finn;
