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

// Utils

// Data

// TYPE/INTERFACE
import { Profile } from "../src/types/Types";
import { withRemoveFavorites } from "../src/components/HigherOrderComponents/withRemoveFavorites";
type Props = {
  profile: Profile;
  setProfile: (value: Profile) => void;
  isLogged: boolean;
  jwt: string;
};
// Functional component
const FavoritterPage = ({ setProfile, profile, isLogged, jwt }: Props) => {
  // Custom hooks
  const [favoriteAdsItems, setFavoriteAdsItems] = useFavoriteAdsItems({
    profile: profile,
  });

  // High Order Component
  const FavoritesListItemWithRemoveFavorite = withRemoveFavorites(
    FavoritesListItem,
    profile,
    jwt,
    setProfile
  );

  // console.log(profile, favoriteAdsItems);
  // console.log("favoritter", profile, favoriteAdsItems);
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
        {/* GET PAGE TO RERENDER */}
        <FavoritesListItemWithRemoveFavorite
          setFavoriteAdsItems={setFavoriteAdsItems}
        />
      </RegularList>
    </>
  );
};
export default FavoritterPage;
