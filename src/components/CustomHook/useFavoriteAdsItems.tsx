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
import { Profile, Ad, FavorittAnnonser } from "../../types/Types";

type Props = {
  profile: Profile;
};
// Functional component
export const useFavoriteAdsItems = ({ profile }: Props) => {
  // Destructure props
  const { favorites } = profile;

  // State
  const [favoriteAdsItems, setFavoriteAdsItems] = useState<FavorittAnnonser>(
    []
  );

  useEffect(() => {
    // If components mounts/rerender, empty favoriteAdsItems
    setFavoriteAdsItems([]);

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const favoritesArray = Object.keys(favorites);
    favoritesArray.forEach((favoriteId: any) => {
      console.log(favoriteId);
      fetchFavoritter(favoriteId, source);
    });
    return () => {
      source.cancel();
    };
  }, [profile, favorites]);

  // Functions
  const fetchFavoritter = (profileId: number, source: any) => {
    axios
      .get(`http://localhost:1337/api/users/${profileId}`, {
        cancelToken: source.token,
      })
      .then((response) => {
        console.log(typeof profileId);
        const { data } = response;
        console.log(response);
        // Filter out ads that is not in "FavorittAnnonser"
        const favoriteAds = data.ad.filter((ad: Ad) => {
          return profile.favorites[profileId].includes(ad.id);
        });
        setFavoriteAdsItems((prev) => [
          ...prev,
          {
            name: data.name,
            location: data.location,
            ads: favoriteAds,
          },
        ]);
      })
      .catch((error) => {
        console.log("An error occurred:", error);
      });
  };
  // Return
  return favoriteAdsItems;
};
