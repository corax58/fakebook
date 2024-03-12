import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import LoginImage from "../assets/images/login.png";

const LoginPage = () => {
  const [emailOrUserName, setEmailOrUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();
  const { user } = useAuthContext();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(emailOrUserName, password);
  };
  if (user) return <Navigate to={"/"} />;
  return (
    <div className="auth-board">
      <div className=" h-2/4 flex md:w-4/5">
        <img
          src={LoginImage}
          alt="login"
          className=" size-full rounded-l-md sm:hidden"
        />
        <form onSubmit={handleSubmit} className="auth-form space-y-5 w-full">
          <h3 className=" text-2xl font-bold mx-auto text-neutral-200 font-serif">
            Login
          </h3>

          <div className="flex flex-col">
            <label htmlFor="emailOrUserName" className="text-neutral-400">
              Enter Email or User Name
            </label>
            <input
              className=" text-input"
              id="emailOrUserName"
              type="text"
              onChange={(e) => setEmailOrUserName(e.target.value)}
              value={emailOrUserName}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-neutral-400">
              Password
            </label>
            <input
              className="text-input"
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="bg-secondary w-max px-3 py-1 rounded-md hover:bg-third font-semibold text-neutral-400"
          >
            Login
          </button>
          {error && <p className="bg-red-600 text-white">{error}</p>}
          <div className="  text-neutral-200 ">
            <span className="mr-2">Dont have an account?</span>
            <Link to={"/signup"} className="hover:text-slate-600 ">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
