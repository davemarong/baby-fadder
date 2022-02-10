// IMPORT

// Next
import Link from "next/link";

// React
import React, { useState } from "react";

// Components

// Styled components
import { NavContainer } from "./StyledComp/NavContainer";

// Material UI
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";

// Icon

// Data
import { navItemsNotLogged, navItemsIsLogged } from "./NavItems";
import { AccountMenu } from "./AccountMenu";

// TYPE/INTERFACE
interface ListItem {
  title: string;
  id: number;
  href: string;
}
type Props = {
  isLogged: boolean;
};
export const Nav = ({ isLogged }: Props) => {
  // State
  const [isOpen, setIsOpen] = useState("none");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Media queries
  const matches = useMediaQuery("(max-width:600px)");
  const navItems = isLogged ? navItemsIsLogged : navItemsNotLogged;

  // Functions
  // Toggle Ul's "display" property between "flex" and "none"
  const toggleMenu = () => {
    if (isOpen === "none") {
      setIsOpen("flex");
      return;
    }
    setIsOpen("none");
  };

  // Return
  return (
    <div
      style={
        matches
          ? { display: "flex", justifyContent: "space-between" }
          : {
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }
      }
    >
      <NavContainer matches={matches} isOpen={isOpen}>
        {matches && <MenuIcon onClick={toggleMenu} />}
        <ul>
          {navItems.map((item: ListItem) => {
            return (
              <li key={item.id}>
                <Link href={item.href}>
                  <a>{item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </NavContainer>
      {isLogged ? <AccountMenu /> : null}
    </div>
  );
};
