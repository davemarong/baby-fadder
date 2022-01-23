// IMPORT

// Next

// React

// Material UI
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

// Icons
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

// Components

// Utils

// Data

// TYPE/INTERFACE
interface Props {
  placeholder: string;
  suggestions: string;
  func?: () => void;
}
// Functional component
export const SearchField = ({ placeholder, suggestions, func }: Props) => {
  // State

  // Functions

  // Return
  return (
    <>
      <TextField
        placeholder={placeholder}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchRoundedIcon onClick={func} />
            </InputAdornment>
          ),
        }}
      />
      <p>
        <b>Forslag: </b>
        {suggestions}
      </p>
    </>
  );
};
