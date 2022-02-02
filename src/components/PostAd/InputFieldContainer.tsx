// IMPORT

import { ReactNode } from "react";

// Next

// React
import React from "react";

// Material UI
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// Components

// Utils

// Data

// TYPE/INTERFACE
type Props = {
  children: any;
  inputData: {
    label: string;
    labelNorwegian: string;
    multiline?: boolean;
    rows?: number;
    xs: number;
    sm: number;
    md: number;
  }[];
};
// Functional component
export const InputFieldContainer = ({ children, inputData }: Props) => {
  // State

  // Functions

  // Return
  return (
    <>
      {inputData.map((item: any) => {
        return (
          <Grid container item key={item.label}>
            <Grid
              style={{ margin: 20, marginLeft: 0 }}
              item
              xs={item.xs}
              sm={item.sm}
              md={item.md}
            >
              {React.cloneElement(children, { inputData: item })}
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};
