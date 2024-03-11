import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (profilePic, userName, email, password) => {
    const formData = new FormData();

    formData.append("profilePic", profilePic);
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    setIsLoading(true);
    setError(null);
    const something = { profilePic, userName, email, password };
    console.log(formData.get("profilePic"));
    axios
      .post(import.meta.env.VITE_SERVER_API_URL + "/user/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
