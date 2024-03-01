import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (userName, email, password) => {
    setIsLoading(true);
    setError(null);

    axios
      .post(import.meta.env.VITE_SERVER_URL + "/user/signup", {
        userName,
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

  return { signup, isLoading, error };
};
