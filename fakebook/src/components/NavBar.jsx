import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { GoSearch, GoHomeFill } from "react-icons/go";
import { FaUserFriends, FaPhotoVideo, FaUserAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const { user } = useAuthContext();
  console.log(user);
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <nav className=" h-14 w-full  bg-primary border-b border-b-third flex-row flex justify-between  items-center shadow-md">
      <div className="w-full justify-start flex">
        <div className="flex flex-row items-center space-x-2 ml-2 h-full">
          <Link to={"/"}>
            <img
              src={logo}
              alt="fakebook logo"
              className="size-10 rounded-full"
            />
          </Link>

          <form
            action=""
            className="flex flex-row items-center "
            onSubmit={handleSearchSubmit}
          >
            <GoSearch
              className=" absolute ml-2  text-neutral-500 font-semibold"
              size={20}
            />
            <input
              type="text"
              className=" rounded-full  h-10 bg-third pl-8 md:w-36 sm:w-mmin text-neutral-400"
              placeholder={"Search Fakebook"}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="w-full justify-center sm:hidden flex">
        <div className="flex flex-row space-x-4 sm:hidden ">
          <Link>
            <div className="navbar-icon group items-center justify-center flex">
              <GoHomeFill
                className="text-neutral-300 group-hover:text-accent"
                size={28}
              />{" "}
            </div>
          </Link>

          <div className="navbar-icon group items-center justify-center flex">
            <FaUserFriends
              className="text-neutral-300 group-hover:text-accent"
              size={28}
            />
          </div>
          <div className="navbar-icon group items-center justify-center flex">
            <FaPhotoVideo
              className="text-neutral-300 group-hover:text-accent"
              size={28}
            />
          </div>
        </div>
      </div>
      <div className="w-full sm:w-max justify-end flex">
        <div className="flex space-x-2 ">
          <div
            className="right-nav-icon p-2
        "
          >
            <IoMdNotifications size={28} className=" text-neutral-300" />
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <div className="right-nav-icon overflow-hidden size-12">
                {user.profilePic ? (
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
                    {user.userName}
                  </span>
                  <span className=" text-neutral-400 text-sm ">
                    {user.email}
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

export default NavBar;
