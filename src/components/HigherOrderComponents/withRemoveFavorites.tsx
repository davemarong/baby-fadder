/* eslint-disable react/display-name */
// IMPORT

// Next

// React

// Material UI

// Components
import { updateProfile } from "../../utils/Utils";
// Utils

// Data

// TYPE/INTERFACE
import { Ad, Profile, Favorites } from "../../types/Types";

// Functional component
export const withRemoveFavorites = (
  Component: any,
  profile: any,
  jwt: string,
  setProfile: any
) => {
  // State

  // Return
  return (props: any) => {
    // Functions
    const removeFavoriteAd = (
      favorites: Favorites,
      profileId: number,
      adId: number
    ) => {
      const indexOfFavoriteAd = favorites[profileId].indexOf(adId);
      let favoriteAdsList = favorites;
      favoriteAdsList[profileId].splice(indexOfFavoriteAd, 1);
      const updatedFavorites = { favorites: favoriteAdsList };
      console.log(favoriteAdsList);
      console.log(favorites);
      //   GET PAGE TO RERENDER
      updateProfile(jwt, profile.id, updatedFavorites, setProfile);
    };

    // Return
    return (
      <Component
        {...props}
        profile={profile}
        removeFavoriteAd={removeFavoriteAd}
      />
    );
  };
};
