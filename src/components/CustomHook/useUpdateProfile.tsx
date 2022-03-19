// IMPORT

// Next

// React

// Material UI

// Components

// Utils

// Data

// Other
import axios from "axios";

// TYPE/INTERFACE
import { Ad } from "../../types/Types";
type UpdateProperties = {
  name?: string;
  profileId?: number;
  location?: string;
  ad?: Ad[];
};
type Props = {
  jwt: string;
  id: number;
  updateProperties: UpdateProperties;
};
// Functional component
/**
 * Function for updating profile data in strapi backend
 * @param {string} jwt Javascript Web Token
 * @param {number} id Profile id
 * @param {UpdateProperties} updateProperties Profile data that will get updated
 * @return {void}
 */
export const useUpdateProfile = ({ jwt, id, updateProperties }: Props) => {
  // State

  // Functions

  axios
    .put(`http://localhost:1337/api/users/${id}`, updateProperties, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  //   };
  // Return
  return <></>;
};
