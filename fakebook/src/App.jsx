import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import PostForum from "./components/PostForum";
import axios from "axios";
import TextPostCard from "./components/TextPostCard";
import PostPanel from "./components/PostPanel";
import TopUsers from "./components/TopUsers";
import TopPosts from "./components/TopPosts";

function App() {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/api/posts/")
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <div className="  h-full w-screen bg-secondary ">
        <NavBar />
        <div className="flex">
          <div className=" w-1/3 md:hidden">
            <TopUsers />
          </div>

          <div className="flex flex-col items-center w-full px-1">
            <PostForum />
            <PostPanel />
          </div>
          <div className="w-1/3 sm:hidden md:w-1/2">
            <TopPosts />
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default App;
