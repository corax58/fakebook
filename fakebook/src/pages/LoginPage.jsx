import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="auth-board">
      <form onSubmit={handleSubmit} className="auth-form">
        <h3 className=" text-2xl font-bold mx-auto text-neutral-200 font-serif">
          Login
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
          type="submit"
          className="bg-secondary w-max px-3 py-1 rounded-md hover:bg-third font-semibold"
        >
          Login
        </button>
        <div className="  text-neutral-200 ">
          <span className="mr-2">Dont have an account?</span>
          <Link to={"/signup"} className="hover:text-slate-600 ">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
