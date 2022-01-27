// IMPORT

// Next

// React
import { ReactNode } from "react";

// Material UI
import { styled } from "@mui/system";

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
export const AdText = ({ children, bigText, fontSize }: Props) => {
  // Styled component
  const AdText = styled("p")`
    margin-top: 10px;
    margin-bottom: 40px;
    text-align: center;
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
    <AdText>
      {bigText} <br />
      <small>{children}</small>
    </AdText>
  );
};
