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
  align?: "left" | "center" | "right";
  margin?: number | string;
};
// Functional component
export const Header = ({ children, align = "left", margin = 0 }: Props) => {
  // State

  // Functions

  // Return
  return (
    <Typography style={{ margin: margin }} align={align} variant="h4">
      {children}
    </Typography>
  );
};
