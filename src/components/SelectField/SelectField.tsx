// IMPORT

// Next

// React
import React, { useState } from "react";

// Material UI
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

// Components

// Utils

// Data

// TYPE/INTERFACE
interface Props {
  filterOption?: FilterOptions;
}

type FilterOptions = {
  title: string;
  options: Options[];
};
type Options = {
  value: string;
};

// Functional component
export const SelectField = (props: Props) => {
  // Props
  const { filterOption = { title: "", options: [{ value: "" }] } } = props;

  // State
  const [selectValue, setSelectValue] = useState("");

  // Functions
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectValue(event.target.value);
  };

  // Return
  return (
    <>
      <TextField
        fullWidth
        select
        label={filterOption.title}
        value={selectValue}
        onChange={handleChange}
        key={filterOption.title}
      >
        {filterOption.options.map((option: Options) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};
