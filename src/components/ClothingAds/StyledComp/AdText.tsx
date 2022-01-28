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
};
// Functional component
export const AdText = ({ children, bigText }: Props) => {
  // Styled component
  const AdText = styled("p")`
    margin-top: 10px;
    margin-bottom: 40px;
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
    & > small {
      font-weight: lighter;
      font-size: 0.8rem;
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
