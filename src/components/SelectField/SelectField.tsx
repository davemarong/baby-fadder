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
import { FilterCategories } from "../../types/Types";
interface Props {
  filterOption?: FilterOptions;
  filterCategories: FilterCategories;
  setFilterCategories: React.Dispatch<React.SetStateAction<FilterCategories>>;
}

type FilterOptions = {
  title: string;
  titleNorwegian: string;
  options: Options[];
};
type Options = {
  value: string;
  label: string;
};

// Functional component
export const SelectField = (props: Props) => {
  // Props
  const {
    filterOption = {
      title: "",
      titleNorwegian: "",
      options: [{ label: "", value: "" }],
    },
    filterCategories,
    setFilterCategories,
  } = props;

  // State
  const [selectValue, setSelectValue] = useState("");

  // Functions
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectValue(event.target.value);
    setFilterCategories({
      ...filterCategories,
      [filterOption.title]: event.target.value,
    });
  };

  // Return
  return (
    <Grid item md={2} sm={3} xs={5} style={{ margin: "0 10px" }}>
      <TextField
        fullWidth
        select
        label={filterOption.titleNorwegian}
        value={selectValue}
        onChange={handleChange}
        key={filterOption.title}
      >
        {filterOption.options.map((option: Options) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  );
};
