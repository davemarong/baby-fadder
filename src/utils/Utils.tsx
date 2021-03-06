// Other
import axios from "axios";

// TYPE/INTERFACE
import { Ad, Profile, Favorites } from "../types/Types";
type UpdateProperties = {
  name?: string;
  id?: number;
  location?: string;
  ad?: Ad[];
  favorites?: Favorites;
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
  const { favorites = [] } = profile;
  let updatedFavorites: { favorites: Favorites };
  if (favorites?.[ad.profileId]) {
    updatedFavorites = {
      favorites: {
        ...favorites,
        [ad.profileId]: [...favorites[ad.profileId], ad.id],
      },
    };
  } else {
    updatedFavorites = { favorites: { ...favorites, [ad.profileId]: [ad.id] } };
  }

  updateProfile(jwt, profile.id, updatedFavorites, setProfile);
};

/**
 * Function for updating profile data in strapi backend
 * @param {String} username User's login username
 * @param {String} password User's login password
 * @param {Any} success If login is successful, run this
 * @param {Any} error If login fails, run this
 * @return {void}
 */
export const loginUser = (
  username: string,
  password: string,
  success: (response: any) => void,
  error: (errorMessage: any) => void
) => {
  axios
    .post("http://localhost:1337/api/auth/local", {
      identifier: username,
      password: password,
    })
    .then((response) => {
      success(response);
    })
    .catch((errorMessage) => {
      error(errorMessage);
    });
};
