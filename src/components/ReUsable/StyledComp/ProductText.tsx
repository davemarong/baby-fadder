// IMPORT

// Next

// React
import { ReactNode } from "react";

// Material UI
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";

// Components

// Utils

// Data

// TYPE/INTERFACE
type Props = {
  children: ReactNode;
  bigText: string;
  fontSize: number;
};
// Functional component
export const ProductText = ({ children, bigText, fontSize }: Props) => {
  // Styled component
  const ProductText = styled("p")`
    margin: 5px;
    font-weight: bold;
    font-size: ${fontSize + 1.1}rem;
    & > small {
      font-weight: lighter;
      font-size: ${fontSize + 0.8}rem;
    }
  `;

  // Functions

  // Return
  return (
    <ProductText>
      {bigText}: <small>{children}</small>
    </ProductText>
  );
};
