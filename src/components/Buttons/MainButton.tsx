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
export const MainButton = ({ children, func, icon }: Props) => {
  // Styled component

  const MainButton = styled(Button)`
    background-color: #ee7768;
    &:hover {
      background-color: #bd5d51;
    }
  `;

  // Functions

  // Return
  return (
    <MainButton variant="contained" onClick={func} endIcon={icon}>
      {children}
    </MainButton>
  );
};
