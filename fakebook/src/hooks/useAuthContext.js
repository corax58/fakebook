import { AuthContext } from "../context/authContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must me be used insinde authContextProvider");
  }
  return context;
};
