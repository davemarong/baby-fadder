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
interface Props {
  children: ReactNode;
  matches: boolean;
  isOpen: string;
}

export const NavContainer = ({ children, matches, isOpen }: Props) => {
  // Styled component
  const NavCompDesktop = styled("nav")`
    margin: 20px;
    > ul {
      color: #373a4d;
      column-gap: 30px;
      list-style-type: none;
      display: flex;
      justify-content: flex-end;
      margin: 20px;
      > li {
        cursor: pointer;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid transparent;
        transition: 0.5s border;
        &:hover {
          border: 1px solid #ee7768;
        }
        &:active {
          color: #e1e1e1;
        }
      }
    }
  `;

  const NavCompMobile = styled("nav")`
    margin: 20px;
    > ul {
      color: #373a4d;
      row-gap: 20px;
      flex-direction: column;
      list-style-type: none;
      display: ${isOpen};
      justify-content: flex-end;
      > li {
        cursor: pointer;
      }
    }
  `;

  // Return
  if (matches) {
    return <NavCompMobile>{children}</NavCompMobile>;
  } else {
    return <NavCompDesktop>{children}</NavCompDesktop>;
  }
};
