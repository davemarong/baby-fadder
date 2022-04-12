// IMPORT

// Next
import { useRouter } from "next/router";

// React
import { useState, useEffect } from "react";

// Material UI

// Components

// Utils
import { loginUser } from "../../utils/Utils";

// Data

// TYPE/INTERFACE
type Props = {
  setJwt: (value: string) => void;
  setProfile: any;
  setIsLogged: (value: boolean) => void;
};
// Functional component
export const useLogUserIn = ({ setProfile, setJwt, setIsLogged }: Props) => {
  // State

  // Router
  const router = useRouter();

  // Functions
  const successfulLogin = (response: any) => {
    console.log(response);
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
  };

  const failedLogin = (error: any) => {
    console.log(error);
  };
  // UseEffect
  useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    if (username && password) {
      loginUser(username, password, successfulLogin, failedLogin);
    }
  }, []);

  // Return
  return <></>;
};
