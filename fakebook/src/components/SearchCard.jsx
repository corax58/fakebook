import React from "react";
import logo from "../assets/images/logo.png";
import { GoSearch } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const SearchCard = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("query"));
  const queryclient = useQueryClient();

  let userContext = {
    userName: "",
    email: "",
    profilePic: "",
    token: "",
  };
  const { user } = useAuthContext();
  if (user) {
    userContext = user;
  }

  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setSearchParams({ query: searchQuery });
    queryclient.invalidateQueries({ queryKey: ["searchedPosts"] });
  };
  return (
    <nav className=" h-14 w-full  bg-primary border-b border-b-third flex-row flex justify-between sm:justify-strech items-center shadow-md">
      <div className="w-full justify-start sm:w-max flex">
        <Link to={"/"}>
          <div className="flex flex-row items-center space-x-2 ml-2 h-full ">
            <img
              src={logo}
              alt="fakebook logo"
              className="h-10 sm:w-12 rounded-full mr-5"
            />
          </div>{" "}
        </Link>
      </div>
      <div className="w-full justify-center flex">
        <div className="flex flex-row space-x-4  w-full">
          <form
            action=""
            className="flex flex-row items-center  w-full"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className=" rounded-full  h-10 bg-third pl-8 w-full text-neutral-400"
              placeholder={"Search Fakebook"}
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
            <GoSearch
              className=" absolute ml-2  text-neutral-500 font-semibold"
              size={20}
            />
          </form>
        </div>
      </div>
      <div className="w-full justify-end flex sm:w-max">
        <div className="flex space-x-2 ">
          <div
            className="right-nav-icon p-2 sm:hidden
        "
          >
            <IoMdNotifications size={28} className=" text-neutral-300" />
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <div className="right-nav-icon overflow-hidden size-12">
                {userContext.profilePic ? (
                  <img
                    src={import.meta.env.VITE_SERVER_URL + user.profilePic}
                    className=" size-12"
                  />
                ) : (
                  <FaUserAlt size={28} className=" text-neutral-300" />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[8] menu p-2 shadow  rounded-box w-max bg-third"
            >
              <li>
                <div className="flex flex-col  items-start gap-0">
                  <span className=" font-semibold text-neutral-300 text-base ">
                    {userContext.userName}
                  </span>
                  <span className=" text-neutral-400 text-sm ">
                    {userContext.email}
                  </span>
                </div>
              </li>
              <li>
                <button
                  className=" font-bold text-red-500"
                  onClick={handleLogout}
                >
                  <RiLogoutBoxLine size={22} className="font-bold" />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchCard;
