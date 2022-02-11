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
  textAlign: string;
  margin?: string;
  fontWeightBig?: string;
  fontWeightSmall?: string;
};
// Functional component
export const AdText = ({
  children,
  bigText,
  fontSize,
  textAlign = "center",
  margin = "10px 0 30px 0",
  fontWeightBig = "bold",
  fontWeightSmall = "lighter",
}: Props) => {
  // Styled component
  const AdText = styled("p")`
    margin: ${margin};
    text-align: ${textAlign};
    font-weight: ${fontWeightBig};
    font-size: ${fontSize + 1.1}rem;
    & > small {
      font-weight: ${fontWeightSmall};
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
