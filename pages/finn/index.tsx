// IMPORT

// Next
import type { NextPage } from "next";

// React
import React, { useState, useEffect } from "react";

// Material UI
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";

// Components
import { Nav } from "../../src/components/Nav/Nav";
import { SearchField } from "../../src/components/ReUsable/SearchField/SearchField";
import { SelectField } from "../../src/components/SelectField/SelectField";
import { SelectFieldContainer } from "../../src/components/SelectField/SelectFieldContainer";
import { ClothingAdDesktop } from "../../src/components/ClothingAds/ClothingAdDesktop";
import { ClothingAdMobile } from "../../src/components/ClothingAds/ClothingAdMobile";
import { ClothingAdsContainer } from "../../src/components/ClothingAds/ClothingAdsContainer";
import { Preview } from "../../src/components/Preview/Preview";
import { PreviewButtonAndLink } from "../../src/components/Preview/PreviewButtonAndLink";

// Utils

// Data
import { profiles } from "../../src/dummyData/Profiles";

// Default value
import {
  defaultValue_Profile,
  defaultValue_FilterCategories,
} from "../../src/types/DefaultValues";

// TYPE/INTERFACE
import { AllProfiles, CurrentAd, Profile } from "../../src/types/Types";
type Props = {
  currentAd: CurrentAd;
  setCurrentAd: (value: CurrentAd) => void;
  isLogged: boolean;
  profile: Profile;
  setProfile: (value: Profile) => void;
  jwt: string;
};

// Functional component
const Finn = ({
  currentAd,
  setCurrentAd,
  isLogged,
  profile,
  setProfile,
  jwt,
}: Props) => {
  // State
  const [filterCategories, setFilterCategories] = useState(
    defaultValue_FilterCategories
  );
  const [profileData, setProfileData] = useState<AllProfiles>(profiles);

  // Media Query
  const matches = useMediaQuery("(min-width:600px)");
  const ClothingAd = matches ? ClothingAdDesktop : ClothingAdMobile;

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
  const PreviewProps = {
    profile: profile,
    setProfile: setProfile,
    jwt: jwt,
  };
  // Return
  return (
    <Container>
      <Nav isLogged={isLogged} />
      <SearchField {...SearchFieldProps} />
      <SelectFieldContainer>
        <SelectField {...SelectFieldProps} />
      </SelectFieldContainer>
      <ClothingAdsContainer {...ClothingAdsContainerProps}>
        <ClothingAd {...setCurrentAdProp}>
          <Preview {...PreviewProps}>
            <PreviewButtonAndLink {...setCurrentAdProp} />
          </Preview>
        </ClothingAd>
      </ClothingAdsContainer>
    </Container>
  );
};
export default Finn;
