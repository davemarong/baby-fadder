// IMPORT

import { ReactNode } from "react";

// Next

// React

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
  itemComponent: any;
  gridProps?: any;
};
// Functional component
export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
  gridProps,
}: Props) => {
  // State

  // Functions

  // Return
  return (
    <Grid container {...gridProps}>
      {items.map((data: any, id: number) => {
        return <ItemComponent key={id} {...{ [resourceName]: data }} />;
      })}
    </Grid>
  );
};
