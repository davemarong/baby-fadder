// IMPORT

// React

// Components

// Material UI
import useMediaQuery from "@mui/material/useMediaQuery";

// Utils

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

  // Custom hook
  const matches = useMediaQuery("(min-width:600px)");

  // Functions

  // Return
  return (
    <nav>
      <ul>
        {navItems.map((item: ListItem) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </nav>
  );
};
