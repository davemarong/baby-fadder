// IMPORT

// Next

// React
import { useState } from "react";

// Material UI
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";

// Icons
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

// Components

// Utils
import { filterSearchItems } from "./Utils";

// Data
import { profiles } from "../../../dummyData/Profiles";

// TYPE/INTERFACE
import { Profile } from "../../../types/Types";
import { FilterCategories } from "../../../types/Types";

interface Props {
  placeholder: string;
  suggestions: string;
  setProfileData: React.Dispatch<React.SetStateAction<Profile>>;
  filterCategories: FilterCategories;
}
type Property = {
  filterCategories: {
    property: { [key: string]: any };
  };
};
// Functional component
export const SearchField = ({
  placeholder,
  setProfileData,
  suggestions,
  filterCategories,
}: Props) => {
  // State
  const [searchInput, setSearchInput] = useState("");

  // Functions

  // Handle search query input by user
  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };
  // Update search results on page
  const updateSearchResults = (result: Profile) => {
    if (result) {
      setProfileData(result);
    }
  };

  // Return
  return (
    <Container maxWidth="sm">
      <TextField
        placeholder={placeholder}
        value={searchInput}
        onChange={handleUserInput}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  const result = filterSearchItems(
                    profiles,
                    searchInput,
                    filterCategories
                  );
                  updateSearchResults(result);
                }}
              >
                <SearchRoundedIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <p>
        <b>Forslag: </b>
        {suggestions}
      </p>
    </Container>
  );
};
