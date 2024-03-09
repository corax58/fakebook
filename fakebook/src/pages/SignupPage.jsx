import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import { Navigate } from "react-router-dom";
import getinimage from "../assets/images/introArt.jpg";
import { useAuthContext } from "../hooks/useAuthContext";
const profilePicture =
  "https://i1.sndcdn.com/artworks-000189080723-ez2uad-t500x500.jpg";
const SingupPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const { signup, error, isLoading } = useSignup();
  const { user } = useAuthContext();
  const [fileTypeError, setFileTypeError] = useState(null);

  const handlePhoto = (e) => {
    if (
      e.target.files[0].type !== "image/png" &&
      e.target.files[0].type !== "image/jpeg" &&
      e.target.files[0].type !== "image/jpg"
    ) {
      setFileTypeError("File type not supported");
    } else {
      setFileTypeError(null);
      setPhoto(e.target.files[0]);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });

    await signup(userName, email, password);
  };
  if (user) return <Navigate to={"/"} />;
  return (
    <div className="auth-board">
      <div className="flex h-5/6 rounded-md overflow-hidden">
        <img src={getinimage} alt="login" className=" opacity-80 " />
        <form onSubmit={handleSubmit} className="auth-form h-full ">
          <h3 className=" text-2xl font-bold mx-auto text-neutral-200 font-serif">
            Sign Up
          </h3>
          <div className="m-auto">
            <img
              src={photo ? URL.createObjectURL(photo) : profilePicture}
              className=" size-64"
              alt=""
            />
          </div>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            onChange={handlePhoto}
          />

          <div className="flex flex-col space-y-8 ">
            <div className=" input-area">
              <label htmlFor="userName">Username</label>
              <input
                className="text-input"
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className=" input-area">
              <label htmlFor="email">Email</label>
              <input
                className="text-input"
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className=" input-area">
              <label htmlFor="password">Password</label>
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
              className="bg-secondary w-max px-3 py-1 rounded-md hover:bg-third font-semibold"
            >
              Create an account
            </button>
          </div>
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
    </div>
  );
};

export default SingupPage;
