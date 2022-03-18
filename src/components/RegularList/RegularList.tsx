// IMPORT

import { ReactNode } from "react";

// Next

// React
import React from "react";

// Material UI
import Grid from "@mui/material/Grid";

// Components

// Utils

// Data

// TYPE/INTERFACE
import { FavorittAnnonser, Ad } from "../../types/Types";
type Props = {
  items: any;
  resourceName: string;
  // itemComponent: any;
  gridProps?: any;
  children: any;
};
// Functional component
export const RegularList = ({
  items,
  resourceName,
  // itemComponent: ItemComponent,
  gridProps,
  children,
}: Props) => {
  // State

  // Functions

  // Return
  return (
    <Grid container {...gridProps}>
      {items.map((data: any, id: number) => {
        return (
          <React.Fragment key={id}>
            {React.cloneElement(children, { ...{ [resourceName]: data } })}
          </React.Fragment>
        );
      })}
    </Grid>
  );
};
