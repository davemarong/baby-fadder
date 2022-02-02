// IMPORT

// Next

// React
import { useState } from "react";

// Material UI
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

// Components

// Utils

// Data

// Default value
import { defaultValue_filterOption } from "../../types/DefaultValues";

// TYPE/INTERFACE
import { Ad, FilterOption } from "../../types/Types";
type Props = {
  newAd: Ad;
  setNewAd: (value: Ad) => void;
  filterOption?: FilterOption;
};
// Functional component
export const SelectField = ({
  newAd,
  setNewAd,
  filterOption = defaultValue_filterOption,
}: Props) => {
  // State
  const [selectedValue, setSelectedValue] = useState("");

  // Functions
  const handleValue = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const addValueToNewAd = (value: string) => {
    setNewAd({ ...newAd, [filterOption.title]: value });
  };
  // Return
  return (
    <TextField
      label={filterOption.titleNorwegian}
      onChange={(event) => {
        handleValue(event);
        addValueToNewAd(event.target.value);
      }}
      value={selectedValue}
      select
      fullWidth
    >
      {filterOption.options.map((item: any) => {
        return (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
};
