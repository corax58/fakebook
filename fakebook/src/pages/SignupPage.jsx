import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const SingupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });

    await signup(email, password);
  };
  if (user) return <Navigate to={"/"} />;
  return (
    <div className="auth-board">
      <form onSubmit={handleSubmit} className="auth-form ">
        <h3 className=" text-2xl font-bold mx-auto text-neutral-200 font-serif">
          Sing up
        </h3>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          disabled={isLoading}
          type="submit"
          className="bg-secondary w-max px-3 py-1 rounded-md hover:bg-third font-semibold"
        >
          Sign up
        </button>
        {error && <p className="bg-red-600 text-white">{error}</p>}
        <div className="text-neutral-200">
          <span className="  text-neutral-200 ">
            Already have an account ?{" "}
          </span>
          <Link to={"/login"} className="hover:text-slate-600 ">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SingupPage;
