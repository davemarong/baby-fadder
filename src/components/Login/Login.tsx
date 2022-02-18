//   IMPORT

// React
import React from "react";
import { useState } from "react";

// Next
import { useRouter } from "next/router";

// MUI
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

// Other
import axios from "axios";

// TYPE/INTERFACE
import { Profile } from "../../types/Types";
type Props = {
  children: any;
  setJwt: (value: string) => void;
  setProfile: (value: Profile) => void;
  setIsLogged: (value: boolean) => void;
};

// FUNCTIONAL COMPONENT
export default function Login({
  setJwt,
  setProfile,
  setIsLogged,
  children,
}: Props) {
  //   State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Router
  const router = useRouter();

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
        const {
          name,
          id,
          ad = [],
          location,
          favorites = [],
        } = response.data.user;
        console.log("User profile", response.data);
        setProfile({
          name: name,
          id: id,
          ad: ad,
          location: location,
          favorites: favorites,
        });
        setJwt(response.data.jwt);
        setIsLogged(true);
        setIsLoading(false);
        router.push("/finn");
      })
      .catch((error) => {
        console.log("An error occurred:", error);
        setIsLoading(false);
      });
  };

  // Return
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10} sm={5} md={4}>
        <TextField
          onChange={handleUsernameInput}
          label="Brukernavn/Email"
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
      <Grid item xs={12}></Grid>
      {React.cloneElement(children, { func: handleLoginUser })}
      {isLoading && <CircularProgress />}
    </Grid>
  );
}
