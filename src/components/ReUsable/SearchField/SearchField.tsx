// IMPORT

// Next

// React

// Material UI
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";

// Icons
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

// Components

// Utils

// Data

// TYPE/INTERFACE
interface Props {
  placeholder: string;
  suggestions: string;
}
// Functional component
export const SearchField = ({ placeholder, suggestions }: Props) => {
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
              <SearchRoundedIcon />
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
