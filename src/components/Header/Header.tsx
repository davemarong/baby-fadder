// IMPORT

// Next

// React
import { ReactNode } from "react";

// Material UI
import Typography from "@mui/material/Typography";

// Components

// Utils

// Data

// TYPE/INTERFACE
type Props = {
  children: ReactNode;
};
// Functional component
export const Header = ({ children }: Props) => {
  // State

  // Functions

  // Return
  return <Typography variant="h4">{children}</Typography>;
};
