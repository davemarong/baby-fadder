//   IMPORT

// React
import React, { useState } from "react";
// Next
import Router from "next/router";
// MUI
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
// Other
import axios from "axios";

// FUNCTIONAL COMPONENT
export default function Register() {
  //   State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //   Functions
  const handleEmailInput = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };
  const handleUsernameInput = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUsername(event.target.value);
  };
  const handlePasswordInput = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };
  const handleRegisterUser = () => {
    setIsLoading(true);
    axios
      .post("http://localhost:1337/api/auth/local/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        setIsLoading(false);
        console.log("User profile", response.data.user);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("An error occurred:", error.response);
      });
  };
  //   Return
  return (
    <div>
      <h1>Registrer deg</h1>
      <TextField onChange={handleEmailInput} label="Email" variant="outlined" />
      <TextField
        onChange={handleUsernameInput}
        label="Brukernavn"
        variant="outlined"
      />
      <TextField
        onChange={handlePasswordInput}
        label="Passord"
        variant="outlined"
      />
      <button onClick={handleRegisterUser}>Registrer!</button>
      {isLoading && <CircularProgress />}
    </div>
  );
}
