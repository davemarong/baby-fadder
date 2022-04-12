//   IMPORT

// React
import React from "react";
import { useState } from "react";

// Next
import { useRouter } from "next/router";

// MUI
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import FormControlLabel from "@mui/material/FormControlLabel";

// Utils
import { loginUser } from "../../utils/Utils";

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
  const [checked, setChecked] = useState(true);

  // Router
  const router = useRouter();

  // Controlled Input fields functions
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
  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  // Functions
  const saveUserLoginInfo = (checked: boolean) => {
    if (checked) {
      localStorage.setItem("password", password);
      localStorage.setItem("username", username);
    }
  };

  const successfulLogin = (response: any) => {
    const { name, id, ad = [], location, favorites = [] } = response.data.user;
    setProfile({
      name: name,
      id: id,
      ad: ad,
      location: location,
      favorites: favorites,
    });
    setJwt(response.data.jwt);
    setIsLogged(true);
    saveUserLoginInfo(checked);
    router.push("/finn");
  };

  const failedLogin = (error: any) => {
    console.log(error);
  };

  const handleLoginUser = () => {
    setIsLoading(true);
    loginUser(username, password, successfulLogin, failedLogin);
    setIsLoading(false);
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
      <Grid container item>
        <Grid item xs={4} sm={5}></Grid>
        <Grid item xs={4} sm={2}>
          {React.cloneElement(children, { func: handleLoginUser })}
        </Grid>
        <Grid container alignItems="center" item xs={4} sm={5}>
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChecked} />}
            label="Husk meg?"
          />
        </Grid>
      </Grid>
      {isLoading && <CircularProgress />}
    </Grid>
  );
}
