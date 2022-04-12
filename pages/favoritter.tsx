// IMPORT

// Next

// React

// Material UI

// Components
import { Nav } from "../src/components/Nav/Nav";
import { RegularList } from "../src/components/RegularList/RegularList";
import { FavoritesListItem } from "../src/components/FavoritesList/FavoritesListItem";
import { Header } from "../src/components/Header/Header";
import { MinSideMenu } from "../src/components/MinSideMenu/MinSideMenu";

// Custom hook
import { useFavoriteAdsItems } from "../src/components/CustomHook/useFavoriteAdsItems";
import { withRemoveFavorites } from "../src/components/HigherOrderComponents/withRemoveFavorites";

// Utils

// Data

// TYPE/INTERFACE
import { Profile, CurrentAd } from "../src/types/Types";
type Props = {
  profile: Profile;
  setProfile: (value: Profile) => void;
  setCurrentAd: (value: CurrentAd) => void;
  isLogged: boolean;
  jwt: string;
};
// Functional component
const FavoritterPage = ({
  setProfile,
  profile,
  isLogged,
  jwt,
  setCurrentAd,
}: Props) => {
  // Custom hooks
  const favoriteAdsItems = useFavoriteAdsItems({
    profile: profile,
  });

  // High Order Component
  const FavoritesListItemWithRemoveFavorite = withRemoveFavorites(
    FavoritesListItem,
    profile,
    jwt,
    setProfile
  );
  console.log(profile);
  // Return
  return (
    <>
      <Nav isLogged={isLogged} />
      <Header align="center">Favoritter</Header>
      <MinSideMenu />
      <RegularList
        items={favoriteAdsItems}
        resourceName="adsProfile"
        gridProps={{ justifyContent: "center" }}
      >
        <FavoritesListItemWithRemoveFavorite setCurrentAd={setCurrentAd} />
      </RegularList>
    </>
  );
};
export default FavoritterPage;
