//   IMPORT

// React
import React, { ReactNode } from "react";
import { useState } from "react";

// Next
import Router from "next/router";

// MUI
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

// Styles

// Other
import axios from "axios";

// TYPE/INTERFACE
import { ProfileObject } from "../../types/Types";
type Props = {
  children: any;
  jwt: string;
  setJwt: (value: string) => void;
  profile: ProfileObject;
  setProfile: (value: ProfileObject) => void;
};

// FUNCTIONAL COMPONENT
export default function Login({
  jwt,
  setJwt,
  profile,
  setProfile,
  children,
}: Props) {
  //   State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //   Functions
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
  const handleLoginUser = () => {
    setIsLoading(true);
    axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: username,
        password: password,
      })
      .then((response) => {
        const { name, id, ad, location } = response.data.user;
        console.log("User profile", response.data);
        setProfile({
          name: name,
          id: id,
          ad: ad,
          location: location,
        });
        setJwt(response.data.jwt);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
        setIsLoading(false);
      });
  };

  //   Return
  return (
    <Grid container justifyContent="center">
      <Grid item xs={4}>
        <TextField
          onChange={handleUsernameInput}
          label="Brukernavn/Email"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid style={{ margin: 20 }} item xs={12}></Grid>
      <Grid item xs={4}>
        <TextField
          onChange={handlePasswordInput}
          label="Passord"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}></Grid>
      {React.cloneElement(children, { func: handleLoginUser })}
      {isLoading && <CircularProgress />}
    </Grid>
  );
}
