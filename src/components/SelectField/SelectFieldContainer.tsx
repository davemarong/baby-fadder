// IMPORT

// Next

// React
import React, { ReactNode } from "react";

// Material UI
import Grid from "@mui/material/Grid";

// Components

// Utils

// Data
import filterOptions from "../../dummyData/FilterOptions";

// TYPE/INTERFACE
interface Props {
  children: ReactNode;
}
type FilterOptions = {
  title: string;
  options: Options[];
};

type Options = {
  value: string;
};

// Functional component
export const SelectFieldContainer = ({ children }: Props) => {
  // Return
  return (
    <Grid container justifyContent="space-evenly" spacing={4}>
      {filterOptions.map((filterOption: FilterOptions) => {
        return React.cloneElement(children as React.ReactElement<any>, {
          key: filterOption.title,
          filterOption: filterOption,
        });
      })}
    </Grid>
  );
};
