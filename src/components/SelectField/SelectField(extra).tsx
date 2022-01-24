// IMPORT

// Next

// React

// Material UI
import MenuItem from "@mui/material/MenuItem";

// Components

// Utils

// Data

// TYPE/INTERFACE
interface Props {
  option?: {
    value: string;
  };
  selectValue: any;
}
// Functional component
export const SelectField = ({ option = { value: "" }, selectValue }: Props) => {
  // State
  // Functions
  // Return
  console.log(selectValue);
  return (
    <MenuItem key={option.value} value={option.value}>
      {option.value}
    </MenuItem>
  );
};
