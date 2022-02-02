// IMPORT

// Next

// React
import { ReactNode } from "react";

// Material UI
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

// Components

// Utils

// Data

// TYPE/INTERFACE
type Props = {
  children: ReactNode;
  icon?: any;
  align?: string;
  func?: () => void;
};
// Functional component
export const MainButton = ({
  children,
  func,
  icon,
  align = "flex-end",
}: Props) => {
  // Styled component

  const MainButton = styled(Button)`
    margin: 20px;
    background-color: #ee7768;
    &:hover {
      background-color: #bd5d51;
    }
  `;

  // Functions

  // Return
  return (
    <Grid container justifyContent={align}>
      <MainButton variant="contained" onClick={func} endIcon={icon}>
        {children}
      </MainButton>
    </Grid>
  );
};
