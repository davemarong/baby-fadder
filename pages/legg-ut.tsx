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
import { InputField } from "../src/components/LeggUt/InputField";
import { InputFieldContainer } from "../src/components/LeggUt/InputFieldContainer";
import { SelectField } from "../src/components/LeggUt/SelectField";
import { SelectFieldContainer } from "../src/components/LeggUt/SelectFieldContainer";

// Utils
import { updateProfile } from "../src/utils/Utils";

// Data
import InputData from "../src/dummyData/InputData";

// Custom hook
import { useUpdateProfile } from "../src/components/CustomHook/useUpdateProfile";

// Other
import { useSnackbar } from "notistack";
import { v4 as uuidv4 } from "uuid";

// Default value
import { defaultValue_Ad } from "../src/types/DefaultValues";
import { MainButton } from "../src/components/Buttons/MainButton";
import { UploadImage } from "../src/components/UploadImage/UploadImage";

// TYPE/INTERFACE
import { Profile } from "../src/types/Types";
type Props = {
  jwt: string;
  profile: Profile;
  setProfile: (value: Profile) => void;
  isLogged: boolean;
};
// Functional component
const LeggUt = ({ jwt, profile, setProfile, isLogged }: Props) => {
  // State
  const [newAd, setNewAd] = useState({
    ...defaultValue_Ad,
    profileId: profile.id,
    id: uuidv4(),
  });

  // Snackbar
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  console.log(newAd);

  // Functions
  const updateProfileContainerFunc = () => {
    let updateObject;
    if (profile.ad) {
      updateObject = {
        ad: [...profile.ad, newAd],
      };
    } else {
      updateObject = {
        ad: [newAd],
      };
    }
    updateProfile(jwt, profile.id, updateObject, setProfile);
    enqueueSnackbar(`Annonsen "${newAd.title}" er lagret!`, {
      variant: "success",
    });
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
