// Other
import axios from "axios";

// TYPE/INTERFACE
import { Ad, ProfileObject } from "../types/Types";
type UpdateProperties = {
  name?: string;
  id?: number;
  location?: string;
  ad?: Ad[];
};
/**
 * Function for updating profile data in strapi backend
 * @param {string} jwt Javascript Web Token
 * @param {number} id Profile id
 * @param {UpdateProperties} updateProperties Profile data that will get updated
 * @param {func} setProfile setState func for updating profile
 * @return {void}
 */
export const updateProfile = (
  jwt: string,
  id: number,
  updateProperties: UpdateProperties,
  setProfile: (value: ProfileObject) => void
) => {
  let profile: ProfileObject;
  axios
    .put(`http://localhost:1337/api/users/${id}`, updateProperties, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((res) => {
      console.log(res);
      const { name, ad, id, location } = res.data;
      profile = { name: name, ad: ad, id: id, location: location };
      setProfile(profile);
    })
    .catch((err) => console.log(err));
};
