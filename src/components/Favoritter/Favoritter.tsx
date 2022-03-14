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

// Default Values
import { defaultValue_FavoritesAds } from "../../types/DefaultValues";

// TYPE/INTERFACE
import { Profile, Ad, FavorittAnnonser } from "../../types/Types";

type Props = {
  profile: Profile;
};
// Functional component
export const Favoritter = ({ profile }: Props) => {
  // Destructure props
  const { favorites } = profile;

  // State
  const [favorittAnnonser, setFavorittAnnonser] = useState<FavorittAnnonser>(
    []
  );

  useEffect(() => {
    const favoritesArray = Object.keys(favorites);
    console.log(favoritesArray);
    favoritesArray.forEach((favoriteId: any) => {
      fetchFavoritter(favoriteId);
    });
  }, []);

  // Functions

  const fetchFavoritter = async (profileId: number) => {
    axios
      .get(`http://localhost:1337/api/users/${profileId}`)
      .then((response) => {
        const { data } = response;

        // Filter out ads that is not in "FavorittAnnonser"
        const favoriteAds = data.ad.filter((ad: Ad) => {
          return profile.favorites[profileId].includes(ad.id);
        });
        console.log(favorites, ...favoriteAds);
        setFavorittAnnonser((prev) => [
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
  return (
    <>
      <div>Favoritter</div>
      <div>
        {favorittAnnonser.map((items: any) => {
          return items.ads.map((item: any) => {
            return (
              <div key={item.id}>
                {item.title}
                {item.profileId}
              </div>
            );
          });
        })}
      </div>
    </>
  );
};
