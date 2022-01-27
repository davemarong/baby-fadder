// IMPORT

// Next

// React
import { ReactNode } from "react";

// Material UI
import { styled } from "@mui/system";
import Button from "@mui/material/Button";

// Components

// Utils

// Data

// TYPE/INTERFACE
type Props = {
  children: ReactNode;
  icon?: any;
  func?: () => void;
};
// Functional component
export const TransparentButton = ({ children, func, icon }: Props) => {
  // Styled component

  const TransparentButton = styled(Button)`
    color: #373a4d;
    background-color: transparent;
    border: 2px solid #ee7768;
    &:hover {
      background-color: #bd5d51;
    }
  `;

  // Functions

  // Return
  return (
    <TransparentButton variant="contained" onClick={func} endIcon={icon}>
      {children}
    </TransparentButton>
  );
};
