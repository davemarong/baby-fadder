// IMPORT

// Next

// React
import React, { useState } from "react";

// Material UI
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

// Components

// Utils

// Data

// TYPE/INTERFACE
interface Props {
  filterOption?: FilterOptions;
  filterCategories: {
    gender: string;
    size: string;
    color: string;
  };
  setFilterCategories: React.Dispatch<
    React.SetStateAction<{
      gender: string;
      size: string;
      color: string;
    }>
  >;
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
  const {
    filterOption = { title: "", options: [{ value: "" }] },
    filterCategories,
    setFilterCategories,
  } = props;

  // State
  const [selectValue, setSelectValue] = useState("");

  // Functions
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectValue(event.target.value);
    if (filterOption.title === "Kjønn") {
      setFilterCategories({ ...filterCategories, gender: event.target.value });
    }
    if (filterOption.title === "Størrelse") {
      setFilterCategories({ ...filterCategories, size: event.target.value });
    }
    if (filterOption.title === "Farge") {
      setFilterCategories({ ...filterCategories, color: event.target.value });
    }
  };

  // Return
  return (
    <Grid item md={2} sm={3} xs={6}>
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
    </Grid>
  );
};
