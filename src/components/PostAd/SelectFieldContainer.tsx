// IMPORT

// Next

// React
import React, { ReactNode } from "react";

// Material UI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Components
import { SelectField } from "./SelectField";

// Utils

// Data
import FilterOptions from "../../dummyData/FilterOptions";

// TYPE/INTERFACE
type Props = {
  children: any;
};
// Functional component
export const SelectFieldContainer = ({ children }: Props) => {
  // State

  // Functions

  // Return
  return (
    <>
      <Grid container style={{ maxWidth: 400 }}>
        {FilterOptions.map((item: any) => {
          return (
            <Grid
              style={{ margin: 20, marginLeft: 0 }}
              key={item.title}
              item
              xs={5}
            >
              {React.cloneElement(children, { filterOption: item })}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
