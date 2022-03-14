// IMPORT

import { ReactNode } from "react";

// Next

// React

// Material UI

// Components

// Utils

// Data

// TYPE/INTERFACE
import { FavorittAnnonser, Ad } from "../../types/Types";
type Props = {
  items: any;
  resourceName: string;
  itemComponent: any;
};
// Functional component
export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}: Props) => {
  // State

  // Functions

  // Return
  return (
    <>
      {items.map((data: any, id: number) => {
        return <ItemComponent key={id} {...{ [resourceName]: data }} />;
      })}
    </>
  );
};
