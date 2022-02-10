// IMPORT

// Next
import Link from "next/link";

// React
import { useState } from "react";

// Components

// Styled components
import { NavContainer } from "./StyledComp/NavContainer";

// Material UI
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/system";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

// Icon

// Data
import { navItemsNotLogged, navItemsIsLogged } from "./NavItems";

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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Dashboard
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </NavContainer>
  );
};
