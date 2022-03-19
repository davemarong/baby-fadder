// IMPORT

import { ReactNode } from "react";

// Next

// React
import React from "react";

// Material UI
import Grid from "@mui/material/Grid";

// Components

// Utils

// Library
import { v4 as uuidv4 } from "uuid";

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
  // console.log(items);
  // console.log("RegularList", items);
  // Return
  return (
    <Grid container {...gridProps}>
      {items.map((data: any, id: number) => {
        return (
          <React.Fragment key={uuidv4()}>
            {React.cloneElement(children, { ...{ [resourceName]: data } })}
          </React.Fragment>
        );
      })}
    </Grid>
  );
};
