//   IMPORT

// React
import React from "react";
import { useState } from "react";

// Next
import Router from "next/router";

// MUI
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

// Styles

// Other
import axios from "axios";

// TYPE/INTERFACE
import { ProfileObject } from "../../types/Types";
type Props = {
  jwt: string;
  setJwt: (value: string) => void;
  profile: ProfileObject;
  setProfile: (value: ProfileObject) => void;
};

// FUNCTIONAL COMPONENT
export default function Login({ jwt, setJwt, profile, setProfile }: Props) {
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
          profileId: id,
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
    <>
      <div>
        <h1>Logg inn</h1>
        <TextField
          onChange={handleUsernameInput}
          label="Brukernavn/Email"
          variant="outlined"
        />
        <TextField
          onChange={handlePasswordInput}
          label="Passord"
          variant="outlined"
        />
        <button onClick={handleLoginUser}>Logg inn!</button>
        {isLoading && <CircularProgress />}
      </div>
    </>
  );
}
