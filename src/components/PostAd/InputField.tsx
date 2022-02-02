// IMPORT

// Next

// React
import { useState } from "react";

// Material UI
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

// Components

// Utils

// Data

// TYPE/INTERFACE
import { Ad } from "../../types/Types";
type InputData = {
  label: string;
  labelNorwegian: string;
  multiline?: boolean;
  rows?: number;
};
type Props = {
  inputData?: InputData;
  newAd: Ad;
  setNewAd: (value: Ad) => void;
};
// Functional component
export const InputField = (props: Props) => {
  // Props
  const {
    inputData = { labelNorwegian: "", label: "", multiline: false, rows: 1 },
    newAd,
    setNewAd,
  } = props;
  const { labelNorwegian, label, multiline, rows } = inputData;

  // State
  const [userInput, setUserInput] = useState("");

  // Functions
  const handleChange = (event: any) => {
    setUserInput(event.target.value);
  };
  const addValueToNewAd = (value: string) => {
    setNewAd({ ...newAd, [label]: value });
  };
  return (
    <TextField
      multiline={multiline}
      rows={rows}
      label={labelNorwegian}
      onChange={(event) => {
        handleChange(event);
        addValueToNewAd(event.target.value);
      }}
      value={userInput}
      fullWidth
    />
  );
};
