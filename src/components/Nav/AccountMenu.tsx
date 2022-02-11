// IMPORT

// Next
import { useRouter } from "next/router";

// React
import React, { useState } from "react";

// Material UI
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

// Components

// Utils

// Data

// TYPE/INTERFACE

// Functional component
export const AccountMenu = () => {
  // State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Router
  const router = useRouter();

  // Functions
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Return
  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle style={{ color: "#ee7768", fontSize: "xx-large" }} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          Profil
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push("/mine-annonser");
            handleClose();
          }}
        >
          Mine annonser
        </MenuItem>
        <MenuItem onClick={handleClose}>Favoritter</MenuItem>
      </Menu>
    </div>
  );
};
