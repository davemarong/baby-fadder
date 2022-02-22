// IMPORT

// Next

// React
import { useEffect, useState } from "react";

// Material UI

// Components

// Utils

// Data

// Other
import axios from "axios";

// TYPE/INTERFACE
import { Profile, Ad } from "../../types/Types";

type Props = {
  profile: Profile;
};
// Functional component
export const Favoritter = ({ profile }: Props) => {
  // State
  const [favoritter, setFavoritter] = useState([]);

  useEffect(() => {
    fetchFavoritter(9, 1);
  }, []);

  const fetchFavoritter = (profileId: number, adId: number) => {
    axios
      .get(`http://localhost:1337/api/users/${profileId}`)
      .then((response) => {
        const ad = response.data.ad;
        console.log(ad);
      })
      .catch((error) => {
        console.log("An error occurred:", error);
      });
  };
  // Functions

  // Return
  return <></>;
};
