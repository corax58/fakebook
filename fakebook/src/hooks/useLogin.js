import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    axios
      .post(import.meta.env.VITE_SERVER_URL + "/user/login", {
        email,
        password,
      })
      .then((res) => {
        setIsLoading(false);
        //save user to local storage
        localStorage.setItem("user", JSON.stringify(res.data));
        //update the auth context
        dispatch({ type: "LOGIN", payload: res.data });
      })
      .catch((err) => {
        setIsLoading(false);

        setError(err.response.data.error);
      });
  };

  return { login, isLoading, error };
};
