//   IMPORT

// React
import React, { ReactNode, useState } from "react";
// Next
import Router from "next/router";
// MUI
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

// Other
import axios from "axios";
type Props = {
  children: any;
};
// FUNCTIONAL COMPONENT
export default function Register({ children }: Props) {
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
    <Grid container justifyContent="center">
      <Grid item xs={10} sm={5} md={4}>
        <TextField
          onChange={handleEmailInput}
          label="Email"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid style={{ margin: 20 }} item xs={12}></Grid>
      <Grid item xs={10} sm={5} md={4}>
        <TextField
          onChange={handleUsernameInput}
          label="Brukernavn"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid style={{ margin: 20 }} item xs={12}></Grid>
      <Grid item xs={10} sm={5} md={4}>
        <TextField
          onChange={handlePasswordInput}
          label="Passord"
          variant="outlined"
          fullWidth
        />
      </Grid>
      {React.cloneElement(children, { func: handleRegisterUser })}
      {isLoading && <CircularProgress />}
    </Grid>
  );
}
