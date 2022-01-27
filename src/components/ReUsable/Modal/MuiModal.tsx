// IMPORT

// Next

// React
import React, { useState, ReactNode } from "react";

// Material UI
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Zoom from "@mui/material/Zoom";
import Container from "@mui/material/Container";

// Components

// Utils

// Data

// TYPE/INTERFACE
type Props = {
  children: ReactNode;
  open: boolean;
  func: any;
  width?: any;
};
// Functional component
export const MuiModal = ({ children, open, func, width = "md" }: Props) => {
  // State

  // Functions

  // Return
  return (
    <Modal open={open} onClose={func}>
      <Zoom in={open}>
        <Container
          maxWidth={width}
          style={{
            marginTop: 50,
            padding: 0,
            overflowY: "auto",
            maxHeight: 600,
          }}
        >
          {children}
        </Container>
      </Zoom>
    </Modal>
  );
};
