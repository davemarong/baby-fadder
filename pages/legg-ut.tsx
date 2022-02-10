// IMPORT

// Next
import type { NextPage } from "next";

// React
import { useState } from "react";
import { Header } from "../src/components/Header/Header";

// Material UI
import Container from "@mui/material/Container";

// Components
import { Nav } from "../src/components/Nav/Nav";
import { InputField } from "../src/components/PostAd/InputField";
import { InputFieldContainer } from "../src/components/PostAd/InputFieldContainer";
import { SelectField } from "../src/components/PostAd/SelectField";
import { SelectFieldContainer } from "../src/components/PostAd/SelectFieldContainer";

// Utils
import { updateProfile } from "../src/utils/Utils";

// Data
import InputData from "../src/dummyData/InputData";

// Custom hook
import { useUpdateProfile } from "../src/components/CustomHook/useUpdateProfile";

// Other
import axios from "axios";

// Default value
import { defaultValue_Ad } from "../src/types/DefaultValues";
import { MainButton } from "../src/components/Buttons/MainButton";
import { UploadImage } from "../src/components/UploadImage/UploadImage";

// TYPE/INTERFACE
import { ProfileObject } from "../src/types/Types";
type Props = {
  jwt: string;
  profile: ProfileObject;
  setProfile: (value: ProfileObject) => void;
  isLogged: boolean;
};
// Functional component
const LeggUt = ({ jwt, profile, setProfile, isLogged }: Props) => {
  // State
  const [newAd, setNewAd] = useState(defaultValue_Ad);

  // Functions
  const updateProfileContainerFunc = () => {
    const updateObject = {
      ad: [...profile.ad, newAd],
    };
    updateProfile(jwt, profile.id, updateObject, setProfile);
  };

  // Return
  return (
    <>
      <Nav isLogged={isLogged} />
      <Container maxWidth="md" style={{ maxWidth: 800 }}>
        <Header>Legg ut</Header>
        <InputFieldContainer inputData={InputData}>
          <InputField newAd={newAd} setNewAd={setNewAd} />
        </InputFieldContainer>
        <SelectFieldContainer>
          <SelectField newAd={newAd} setNewAd={setNewAd} />
        </SelectFieldContainer>
        <UploadImage />
        <MainButton func={updateProfileContainerFunc}>Publiser</MainButton>
      </Container>
    </>
  );
};
export default LeggUt;
