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

// Data
import InputData from "../src/dummyData/InputData";

// Default value
import { defaultValue_Ad } from "../src/types/DefaultValues";
import { MainButton } from "../src/components/Buttons/MainButton";

// TYPE/INTERFACE

// Functional component
const LeggUt = () => {
  // State
  const [newAd, setNewAd] = useState(defaultValue_Ad);

  // Functions

  // Return
  return (
    <>
      <Nav />
      <Container maxWidth="md" style={{ maxWidth: 800 }}>
        <Header>Legg ut</Header>
        <InputFieldContainer inputData={InputData}>
          <InputField newAd={newAd} setNewAd={setNewAd} />
        </InputFieldContainer>
        <SelectFieldContainer>
          <SelectField newAd={newAd} setNewAd={setNewAd} />
        </SelectFieldContainer>
        <MainButton>Publiser</MainButton>
      </Container>
    </>
  );
};
export default LeggUt;
