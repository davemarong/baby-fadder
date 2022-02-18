// Other
import axios from "axios";

// TYPE/INTERFACE
import { Ad, Profile, Favorites } from "../types/Types";
type UpdateProperties = {
  name?: string;
  id?: number;
  location?: string;
  ad?: Ad[];
  favorites?: Favorites[];
};

// Functions

/**
 * Function for updating profile data in strapi backend
 * @param {string} jwt Javascript Web Token
 * @param {number} profileId Profile id
 * @param {UpdateProperties} updateProperties Profile data that will get updated
 * @param {func} setProfile setState func for updating profile
 * @return {void}
 */
export const updateProfile = (
  jwt: string,
  profileId: number,
  updateProperties: UpdateProperties,
  setProfile: (value: Profile) => void
) => {
  let profile: Profile;
  axios
    .put(`http://localhost:1337/api/users/${profileId}`, updateProperties, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((res) => {
      console.log(res);
      const { name, ad, id, location, favorites } = res.data;
      profile = {
        name: name,
        ad: ad,
        id: id,
        location: location,
        favorites: favorites,
      };
      setProfile(profile);
    })
    .catch((err) => console.log(err));
};
/**
 * Function for updating profile data in strapi backend
 * @param {Profile} profile User profile
 * @param {Ad} ad All info about the current ad
 * @param {string} jwt Javascript Web Token
 * @param {func} setProfile setState func for updating profile
 * @return {void}
 */
export const updateFavorites = (
  profile: Profile,
  ad: Ad,
  jwt: string,
  setProfile: (value: Profile) => void
) => {
  const newFavorite = { id: ad.id, profileId: ad.profileId };
  let updatedFavorites: { favorites: Favorites[] };
  if (profile.favorites) {
    updatedFavorites = { favorites: [...profile.favorites, newFavorite] };
  } else {
    updatedFavorites = { favorites: [newFavorite] };
  }
  updateProfile(jwt, profile.id, updatedFavorites, setProfile);
};
