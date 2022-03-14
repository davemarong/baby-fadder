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
type Props = {
  profile: Profile;
  isLogged: boolean;
};
// Functional component
const FavoritterPage = ({ profile, isLogged }: Props) => {
  // Custom hooks
  const favoriteAdsItems = useFavoriteAdsItems({ profile: profile });

  // Return
  return (
    <>
      <Nav isLogged={isLogged} />
      <Header align="center">Favoritter</Header>
      <MinSideMenu />
      <RegularList
        items={favoriteAdsItems}
        itemComponent={FavoritesListItem}
        resourceName="profile"
        gridProps={{ justifyContent: "center" }}
      />
    </>
  );
};
export default FavoritterPage;
