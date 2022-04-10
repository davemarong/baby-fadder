// IMPORT

// Next

// React
import { useState, useEffect } from "react";
// Material UI

// Components

// Utils

// Data

// TYPE/INTERFACE

// Functional component
export const useLogUserIn = () => {
  // State
  // Functions
  useEffect(() => {
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
      console.log("Done");
    }
  }, []);

  // Return
  return <></>;
};
