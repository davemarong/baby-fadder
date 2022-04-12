// IMPORT

// Next

// React
import { useState } from "react";
// Material UI

// Components

// Utils

// Data

// TYPE/INTERFACE
import { Favorites } from "../../types/Types";
type Props = {
  profileId: number;
  adId: number;
  favorites: Favorites;
};
// Functional component
export const useRemoveFavoriteAd = ({ favorites, profileId, adId }: Props) => {
  // State
  const [favoriteAds, setFavoriteAds] = useState(favorites);

  // Functions

  // const removeFavoriteAd = () => {
  //   const indexOfFavoriteAd = favoriteAds[profileId].indexOf(adId);
  //   let favoriteAdsList = favorites;
  //   favoriteAdsList[profileId].slice(indexOfFavoriteAd);
  //   console.log(favoriteAdsList);
  // };
  // removeFavoriteAd();

  // const removeFavoriteAd = (
  //   favorites: Favorites,
  //   profileId: number,
  //   adId: number
  // ) => {
  //   const indexOfFavoriteAd = favorites[profileId].indexOf(adId);
  //   let favoriteAdsList = favorites;
  //   favoriteAdsList[profileId].splice(indexOfFavoriteAd, 1);
  //   const updatedFavorites = { favorites: favoriteAdsList };

  //   updateProfile(jwt, profile.id, updatedFavorites, setProfile);
  // };
  // Return
  return <></>;
};
