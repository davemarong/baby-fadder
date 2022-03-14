// IMPORT

// Next

// React
import { useEffect, useState } from "react";

// Material UI

// Components

// Utils

// Data

// TYPE/INTERFACE
import { FavorittAnnonser, Ad } from "../../types/Types";

type Props = {
  // When using the type "FavorittAnnonser" on Profile, I get an error
  profile: any;
};
// Functional component
export const FavoritesListItem = ({ profile }: Props) => {
  // Destructuring

  // Return
  return (
    <>
      {profile.ads.map((ad: Ad, id: number) => {
        return (
          <div key={id}>
            {ad.brand}
            {ad.size}
            {ad.title}
            {ad.color}
          </div>
        );
      })}
    </>
  );
};
