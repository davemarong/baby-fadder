// IMPORT

// Next

// React

// Material UI
import Container from "@mui/material/Container";

// Components
import { Nav } from "../src/components/Nav/Nav";
import { RegularList } from "../src/components/RegularList/RegularList";
import { FavoritesListItem } from "../src/components/FavoritesList/FavoritesListItem";

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
      <Container maxWidth="md">
        <RegularList
          items={favoriteAdsItems}
          itemComponent={FavoritesListItem}
          resourceName="profile"
          gridProps={{ justifyContent: "center" }}
        />
      </Container>
    </>
  );
};
export default FavoritterPage;
