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

// Icon
import MenuIcon from "@mui/icons-material/Menu";

// Data
import { navItems } from "./NavItems";

// TYPE/INTERFACE
interface ListItem {
  title: string;
  id: number;
  href: string;
}

export const Nav = () => {
  // State
  const [isOpen, setIsOpen] = useState("none");

  // Custom hook
  const matches = useMediaQuery("(max-width:600px)");

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
    </NavContainer>
  );
};
